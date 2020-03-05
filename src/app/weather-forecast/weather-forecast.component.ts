import { Component, OnInit } from '@angular/core'
import { WeatherForecastService } from './weather-forecast.service'

@Component({
  selector: 'WeatherForecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.sass']
})
export class WeatherForecast implements OnInit {

  weatherForecastService: WeatherForecastService
    
  constructor(_weatherForecastService: WeatherForecastService) { 
    this.weatherForecastService = _weatherForecastService
  }

  ngOnInit(): void {

    console.log(this.weatherForecastService.getWeatherForecast(2643743))
  }

}
