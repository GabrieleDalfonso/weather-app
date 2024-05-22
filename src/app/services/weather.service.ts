import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from '../interfaces/weather';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  api_key = '06405c6afe8141605c4389a64ccc71b7';

  constructor(private http: HttpClient) { }

  getWheather(lat: String, lon: String) : Observable<Weather>  {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.api_key}&units=metric`;
    
    return this.http.get<Weather>(url);
  }

  getCity(city : String) : Observable<any> {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${this.api_key}`;
    
    return this.http.get(url);
  }
}
