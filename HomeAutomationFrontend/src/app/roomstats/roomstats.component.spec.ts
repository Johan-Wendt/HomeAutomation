import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { RoomstatsComponent } from './roomstats.component';
import { RoomdataService } from '../roomdata.service';
import { BehaviorSubject } from 'rxjs';

describe('RoomstatsComponent', () => {
  let component: RoomstatsComponent;
  let fixture: ComponentFixture<RoomstatsComponent>;
  let roomService: RoomdataService;

  class MockRoomdataService {
    name: string = 'test room';
    temperature: number = 20;
    humidity: number = 0.8;

    roomName = new BehaviorSubject(this.name);
    currentRoomName = this.roomName.asObservable();

    roomTemperature = new BehaviorSubject(this.temperature);
    currentRoomTemperature = this.roomTemperature.asObservable();

    roomHumidity = new BehaviorSubject(this.humidity);
    currentRoomHumidity = this.roomHumidity.asObservable();
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule
      ],
      providers: [
        RoomstatsComponent,
        { provide: RoomdataService, useClass: MockRoomdataService }
      ],
      declarations: [ RoomstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomstatsComponent);
    component = TestBed.get(RoomstatsComponent);
    fixture.detectChanges();
    roomService = TestBed.get(RoomdataService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have room name after construction', () => {
    expect(component.roomName).toBeUndefined();
  });

  it('should have a room name after ngInit', () => {
    component.ngOnInit();
    expect(component.roomName).toEqual(roomService['name']);
  });

  it('should not have temperature after construction', () => {
    expect(component.roomTemperature).toBeUndefined();
  });

  it('should have a temperature after ngInit', () => {
    component.ngOnInit();
    expect(component.roomTemperature).toEqual(roomService['temperature']);
  });

  it('should not have humidity after construction', () => {
    expect(component.roomHumidity).toBeUndefined();
  });

  it('should have a humidity after ngInit', () => {
    component.ngOnInit();
    expect(component.roomHumidity).toEqual(roomService['humidity']);
  });

  it('should not have a display temperature after construction', () => {
    expect(component.displayTemperature).toBeUndefined();
  });

  it('should have a display temperature after ngInit', () => {
    component.ngOnInit();
    expect(component.displayTemperature).toEqual(roomService['temperature']);
  });

  it('should have celsius as display unit after construction', () => {
    expect(component.temperatureUnit).toEqual(component.celsius);
  });

  it('should have fahrenheit as display unit after unit change', () => {
    component.toggleUnitChange();
    expect(component.temperatureUnit).toEqual(component.fahrenheit);
  });

  it('should have display temperature recalculated to fahrenheit after unit change', () => {
    component.ngOnInit();
    component.toggleUnitChange();
    let fahrenheit = component.celsiusToFahrenheit(roomService['temperature']);
    expect(component.displayTemperature).toEqual(fahrenheit);
  });
});
