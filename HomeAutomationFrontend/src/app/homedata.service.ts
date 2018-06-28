import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class HomedataService {
  private homeId = new BehaviorSubject('');
  currentHomeId = this.homeId.asObservable();

  private homeName = new BehaviorSubject('');
  currentHomeName = this.homeName.asObservable();

  constructor(private http: HttpClient) { }

  getHomes() {
    return this.http.get('http://localhost:5000/homes');
  }

  getRooms(id) {
    return this.http.get('http://localhost:5000/homes/' + id + '/data');
  }

  setHomeId(homeId: string) {
    this.homeId.next(homeId)
  }

  setHomeName(homeName: string) {
    this.homeName.next(homeName);
  }
}
