import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomepickerComponent } from './homepicker/homepicker.component';

import { HttpClientModule } from '@angular/common/http';
import { RoompickerComponent } from './roompicker/roompicker.component';
import { RoomstatsComponent } from './roomstats/roomstats.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepickerComponent,
    RoompickerComponent,
    RoomstatsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
