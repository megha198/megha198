import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // public lat; 
  // public lon;
  public set=0;
  public cities=[];
  public currentWeather: any; 
  public cityWeather:any;
  public nextCityWeather:any=[];
  public selectedCity="";
  public defaultCity="";
  
  public isClick=true;
  public cityCode: any;
  public city: any;
  public unit: any;

  
  nextCurrentCityWeather: any;
  getCityList:any;
  getWeather:any;
  data:any;
  
  constructor(private myService:WeatherService) { }
  
  
    // throw new Error('Method not implemented.');
  
  selectChangeHandler(event:any){
    this.selectedCity=event.target.value;
    this.set=1;
    this.myService.getWeather(this.selectedCity).subscribe(data => {this.cityWeather=data});
     this.myService.getNextDays(this.selectedCity).subscribe(data => {this.nextCityWeather=data.list});
    
    }
    ngOnInit():void {}
  }
 

  




    // if(this.set==0)
    // {
    //   this.getLocation();
    //   this.cities=this.myService.getCityList();

  //   }
  //   this.defaultCity=this.myService.getDefaultCity();
  //   if(this.defaultCity.length>0){
  //     this.myService.getWeather(this.defaultCity).subscribe(data =>{this.currentWeather=data});
  //     this.myService.getNextFewdays(this.defaultCity).subscribe((data: { list: any; }) =>{this.nextCurrentCityWeather=data.list});
  //     this.cities=this.myService.getCityList();
  //   }
    
  //   else{
  //     this.getLocation();
  //     this.cities=this.myService.getCityList();
  //   }

   
  // }

  // }



// function ngOnInit() {
//   throw new Error('Function not implemented.');
  // }


// function ngOnInit() {
//   throw new Error('Function not implemented.');
// }

