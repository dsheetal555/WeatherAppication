import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { observable, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface IWeatherData {
  city: string;
  country: string;
  weather: ICityWeather[];
}

export interface ICityWeather {
  date: string;
  temperature: number;
  weather_name: string;
  weather_image: string;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 

  constructor(
    private http: HttpClient,
  ) { }

  baseUrl = 'http://api.weatherapi.com/v1/current.json?key=60937ec53cb64fe1982173941220906';
  
  getCityDetails(selectedState: string): Observable<IWeatherData> {
    let params = new HttpParams();
    params =params.append('q', selectedState);
    params  = params.append('aqi','no');
    
    let url = this.baseUrl;
    let list = this.http.get(url);
    return this.http.get<IWeatherData>(url, { params });
  }
}
