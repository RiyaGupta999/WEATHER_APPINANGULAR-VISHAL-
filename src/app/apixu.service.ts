import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApixuService {
  

  constructor(private http:  HttpClient) { 
   
  }
  getWeather(location: string){
    return this.http.get('http://api.weatherstack.com/current?access_key=182816030bd275a7f609429bc9a80186&query=London%20'+ location );
  }
}
