import { Component, Input, OnInit } from '@angular/core';
import { RoomdataService } from '../roomdata.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-roomstats',
  templateUrl: './roomstats.component.html',
  styleUrls: ['./roomstats.component.css', '../app.component.css'],
  animations: [
    trigger('changeUnit', [
      state('celsius', style({
        cursor: 'pointer',
        transform: 'rotateY(360deg)'
      })),
      state('fahrenheit', style({
        cursor: 'pointer',
        transform: 'rotateY(0)'
      })),
      transition('celsius => fahrenheit', animate('500ms ease-out')),
      transition('fahrenheit => celsius', animate('500ms ease-in'))
    ])
  ]
})

export class RoomstatsComponent implements OnInit {

  readonly celsius: string = '°C';
  readonly fahrenheit: string = '°F';

  @Input() roomName: string;
  @Input() roomTemperature: number;
  @Input() roomHumidity: number;

  flip: string = 'celsius';

  displayTemperature: number = this.roomTemperature;
  temperatureUnit: string = this.celsius;

  constructor(private roomData: RoomdataService) { }

  ngOnInit() {
    //Subscribe to the data to display
    this.roomData.currentRoomName.subscribe(
      roomName => this.roomName = roomName
    )
    this.roomData.currentRoomTemperature.subscribe(
      roomTemperature => {
        this.roomTemperature = roomTemperature;
        this.displayTemperature = this.temperatureUnit == this.celsius ? roomTemperature : this.celsiusToFahrenheit(roomTemperature);
      }
    )
    this.roomData.currentRoomHumidity.subscribe(
      roomHumidity => this.roomHumidity = roomHumidity
    )
  }

  //Toggles between showing temperature in celsius and fahrenheit
  toggleUnitChange() {
    if (this.flip == 'fahrenheit') {
      this.flip = 'celsius';
      this.temperatureUnit = this.celsius;
      this.displayTemperature = this.roomTemperature;
    } else {
      this.flip = 'fahrenheit';
      this.temperatureUnit = this.fahrenheit;
      this.displayTemperature = this.celsiusToFahrenheit(this.roomTemperature);
    }
  }

  celsiusToFahrenheit(celsius: number) {
    return Math.round((5 / 9) * celsius + 32);
  }

}
