import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { WeatherTableComponent } from './components/weather-table/weather-table.component';
import { WeatherControlsComponent } from './components/weather-controls/weather-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherTableComponent,
    WeatherControlsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
