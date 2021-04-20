import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  
  

  constructor(private http:HttpClient) {

   }
  //  getweather(city):Observable<any>{
  //    return this.http.get<any>('http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=532740edfdf05e45de3c7b45f5e792b3')
  //  }
  //  getweather():Observable<any>{
  //   return this.http.get<any>('')
  getWeather(city: any) : Observable<any>{
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=55f1819a7019b27b0bac5a78879f204d`);
  }
  
  getCurrentweather(lat: any,lon: any) : Observable<any>{
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=55f1819a7019b27b0bac5a78879f204d`);
  }

  getNextDays(city:any) : Observable<any>{
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=55f1819a7019b27b0bac5a78879f204d`);
  }

  getCurrentNextDays(lat: any,lon: any) : Observable<any>{
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=55f1819a7019b27b0bac5a78879f204d`);
  }
  saveCity (ct:String){
    let cities:any[]
    if(localStorage.getItem('cities')){
   
    cities = JSON.parse(String(localStorage.getItem('cities')));
    for(let city of cities){
      console.log(typeof city)
      if(city == ct){
        return
      }
    }
    cities = [ct,...cities]
    }
    else
    {
      cities = [ct];
    }
    localStorage.setItem('cities', JSON.stringify(cities));
    }
  
    // Delete city from localstorage
    deleteCity(cityName: any){
      let cities = []
      let newcities=[]
      cities = JSON.parse(String(localStorage.getItem('cities')))
      console.log(cities)
      for(let city of cities){
        if(city!=cityName){
          newcities.push(city)
        }
      }
      localStorage.setItem('cities',JSON.stringify(newcities));
  
    }
  

}
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// http://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=532740edfdf05e45de3c7b45f5e792b3
// Save city in localStorage

