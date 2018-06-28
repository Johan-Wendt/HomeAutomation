import { Component, OnInit } from '@angular/core';
import { HomedataService } from '../homedata.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-homepicker',
  templateUrl: './homepicker.component.html',
  styleUrls: ['./homepicker.component.css', '../app.component.css']
})

export class HomepickerComponent implements OnInit {
  chosenHomeId: String;
  chosenHomeName: String;
  availableHomes: Array<String>;

  constructor(private homeData: HomedataService) { }

  ngOnInit() {
    this.homeData.getHomes().subscribe(
      homeData => this.availableHomes = homeData['homes']
    )
    this.homeData.currentHomeId.subscribe(
      homeId => this.chosenHomeId = homeId
    )
    this.homeData.currentHomeName.subscribe(
      homeName => this.chosenHomeName = homeName
    )
  }

  selectHome(home) {
    this.homeData.setHomeId(home.id);
    this.homeData.setHomeName(home.name);
  }
}
