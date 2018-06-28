import { Component, OnChanges, DoCheck, ChangeDetectorRef, Input, OnInit } from '@angular/core';
import { HomedataService } from '../homedata.service';
import { Observable } from 'rxjs';
import { RoomdataService } from '../roomdata.service';

@Component({
  selector: 'app-roompicker',
  templateUrl: './roompicker.component.html',
  styleUrls: ['./roompicker.component.css', '../app.component.css']
})
export class RoompickerComponent implements OnInit, DoCheck {

  readonly updateFrequencyMillis$: number = 3000;

  @Input() homeId: String;
  @Input() homeName: String;

  availableRooms: Array<String>;
  selectedRoom: Object;
  selectedHomeId: String;
  shouldReload: boolean;

  selectedRoomTemperature: number;
  selectedRoomHumidity: number;
  selectedRoomName: String;

  constructor(private homeData: HomedataService, private roomData: RoomdataService) { }

  ngOnInit() {
    //Data to receive from homepicker
    this.homeData.currentHomeId.subscribe(
      homeId => this.homeId = homeId
    )
    this.homeData.currentHomeName.subscribe(
      homeName => this.homeName = homeName
    )

    //Data to send to roomstats
    this.roomData.currentRoomName.subscribe(
      roomName => this.selectedRoomName = roomName
    )
    this.roomData.currentRoomTemperature.subscribe(
      roomTemperature => this.selectedRoomTemperature = roomTemperature
    )
    this.roomData.currentRoomHumidity.subscribe(
      roomHumidity => this.selectedRoomHumidity = roomHumidity
    )
  }


  ngDoCheck() {
    let hasChangedHome: boolean = this.homeId && this.selectedHomeId != this.homeId;

    //Set to update if a new home has been chosen
    if (hasChangedHome) {
      this.shouldReload = true;
      this.selectedHomeId = this.homeId;
    }

    if (this.shouldReload) {
      this.shouldReload = false;

      this.homeData.getRooms(this.homeId).subscribe(
        homeData => {
          this.availableRooms = homeData['rooms'];
        }
      )

      this.updateRoomValues(this.selectedRoomName);

      //Set to check for new values frequently
      setTimeout(() => {
        this.shouldReload = true;
      }, this.updateFrequencyMillis$);
    }
  }

  updateRoomValues(roomName) {
    if (roomName != undefined && this.availableRooms != undefined) {
      //Find the chosen room
      for (var i = 0; i < this.availableRooms.length; i++) {
        let room = this.availableRooms[i];
        if (room['name'] == roomName) {
          //Update stats for the room
          this.roomData.setRoomName(roomName);
          this.roomData.setRoomTemperature(room['temperature']);
          this.roomData.setRoomHumidity(room['humidity']);
        }
      } 
    }
  }
}
