import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherDataService {
  apiKey: string = '7c6bd3575147bb374bc610d0d87ed234';

  constructor(private http: HttpClient) {}

  getDataAPI(cityName: string) {
  return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apiKey}&lang=ru`);
  }

}