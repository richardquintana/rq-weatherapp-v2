import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherDataApi: object[];
  _path = 'https://api.weatherbit.io/v2.0/forecast/daily?city_id=';
  _days = '&days=15&';
  _myKey= '&key=143961d49d2e41a89a250609165c8696';

  constructor(private http: HttpClient) { }

  getWeatherData(cityId: String) {
    return this.http.get(this._path + cityId + this._myKey);
  }

  dateFormat(value: string, code:number) {
    var _day = value.substring(8, 10);
    var _month = value.substring(5, 7);
    var _year = value.substring(2, 4);
    
    if(code == 0){
      return _day + '/' + _month +  '/' + _year;
    }else{
      return _month + '/' + _day;
    }
  }
}
