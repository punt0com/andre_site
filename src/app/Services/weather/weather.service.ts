import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private http = inject(HttpClient);
  //https://my.meteoblue.com/packages/basic-day?apikey=VAOevQKusWjPnSGJ&lat=19.4285&lon=-99.1277&asl=2240&format=json

  private apiKey = environment.apiKey;
  private baseUrlLocation = environment.baseUrlLocation;
  private baseUrlForecast = environment.baseUrlForecast;

  getLocation(query: string): Observable<any> {
    const url = `${this.baseUrlLocation}?query=${query}&apikey=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getClimate(lat: string, lon: string, asl: string): Observable<any> {
    const url = `${this.baseUrlForecast}?apikey=${this.apiKey}&&lat=${lat}&lon=${lon}&asl=${asl}&format=json`;
    return this.http.get<any>(url);
  }

}
