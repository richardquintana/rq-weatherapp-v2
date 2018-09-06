import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherdateService } from '../../services/weatherdate.service';

@Component({
  selector: 'app-weather-table',
  templateUrl: './weather-table.component.html',
  styleUrls: ['./weather-table.component.css'],
  providers: [WeatherService, WeatherdateService]
})
export class WeatherTableComponent implements OnInit {

  tempScale = "C";
  tempAux = [];
  dateAux = [];
  weatherApiData = [];
  weatherData = [];

  constructor(private weatherService: WeatherService,
  private wDate: WeatherdateService) { }

  ngOnInit() {
    this.getWeatherCity("4013704");
  }

  getWeatherCity(City: String) {
    this.weatherApiData = [];
    this.weatherService.getWeatherData(City)
      .subscribe(res => {
        for(var key in res){
          if(res.hasOwnProperty(key)){
            this.weatherApiData.push(res[key]);
          }
        }
        this.preProcess();
      });
  }

  preProcess() {
    this.weatherData = this.weatherApiData[0];
    this.fillWeatherData();
    this.appProcess();
  }

  appProcess() {
    if(this.wDate.dateValidation == 1){
      this.applyValidDates(0);
    }else{
      this.applyValidDates(1);
    }
    this.setGraphLabels();
    this.getScale(this.tempScale);
  }

  fillWeatherData() {
    this.tempAux = [];
    this.dateAux = [];
    for(var i=0; i < this.weatherData.length; i++){
      this.tempAux[i] = this.weatherData[i].temp;
      this.dateAux[i] = this.weatherData[i].datetime;
    }
    this.showFormatDate();
  }

  showFormatDate() {
    for(var i=0; i < this.weatherData.length; i++){
      this.weatherData[i].datetime = this.weatherService
      .dateFormat(this.weatherData[i].datetime, 0);
    }
  }

  setGraphLabels() {
    while(this.lineChartLabels.length > 0){
      this.lineChartLabels.pop();
    }
    for(var i=0, x = 0; i < this.weatherData.length; i++){
      if(this.weatherData[i].snow == 1){
        this.lineChartLabels[x] = this.weatherService
        .dateFormat(this.dateAux[i], 1);
        x++;
      }
    }
  }

  setGraphData() {
    let auxArray = [];
    for(var i=0; i < this.weatherData.length; i++){
      if(this.weatherData[i].snow == 1){
        auxArray.push(this.weatherData[i].temp);
      }
    }
    this.lineChartData = [{ data: auxArray, label: "Temperature" }];
  }

  getScale(scale: string) {
    this.tempScale = scale;
    if(scale == "F"){
      for(var i=0; i<this.weatherData.length; i++){
        this.weatherData[i].temp = (this.tempAux[i] * 1.8) + 32;
      }
    }
    if(scale == "C"){
      for(var i=0; i<this.weatherData.length; i++){
        this.weatherData[i].temp = this.tempAux[i];
      }
    }
    this.setGraphData();
  }

  public lineChartLabels:Array<any> = [];

  public lineChartData:Array<any> = [
    {data: [], label: ''}
  ];

  public lineChartOptions:any = {
    responsive: true
  };

  public lineChartColors:Array<any> = [
    { //
      backgroundColor: 'rgba(228,103,57,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  // Date selection...
  sDate = 'N'; eDate = 'N';

  selectedDates(value: string, code:number) {
    if(code == 0){
      this.sDate = value;
    }else{
      this.eDate = value;
    }
    this.wDate.dateProcess(this.dateAux, this.sDate, this.eDate);
    this.appProcess();
  }

  applyValidDates(value:number) {
    if(value == 0){
      for(var i=0; i<this.weatherData.length; i++){
        this.weatherData[i].snow = 0;
      }
      for(var i=0; i<this.wDate.validIndex.length; i++){
        this.weatherData[this.wDate.validIndex[i]].snow = 1;
      }
    }else{
      for(var i=0; i<this.weatherData.length; i++){
        this.weatherData[i].snow = 1;
      }
    }
  }
}
