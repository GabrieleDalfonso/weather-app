import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  city = '';
  weather : any;

  constructor(private WeatherService: WeatherService) {

  }

  ngOnInit(): void {
   
  }

  getWheather() {
   if(this.city){
    this.WeatherService.getCity(this.city).subscribe(response => {
      console.log('city', response);

      let lat = response[0].lat;
      let lon = response[0].lon;

      this.WeatherService.getWheather(lat, lon).subscribe(item => {
       
        this.weather = item;
        console.log(item);
 
      });
    });
   }
  }

}


