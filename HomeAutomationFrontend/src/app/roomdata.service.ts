import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomdataService {
  private roomName = new BehaviorSubject('');
  currentRoomName = this.roomName.asObservable();

  private roomTemperature = new BehaviorSubject(0);
  currentRoomTemperature = this.roomTemperature.asObservable();

  private roomHumidity = new BehaviorSubject(0);
  currentRoomHumidity = this.roomHumidity.asObservable();

  constructor() { }

  setRoomName(roomName: string) {
    this.roomName.next(roomName)
  }

  setRoomTemperature(roomTemperature: number) {
    this.roomTemperature.next(roomTemperature);
  }

  setRoomHumidity(roomHumidity: number) {
    this.roomHumidity.next(roomHumidity);
  }
}
