import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'WeatherForecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.sass']
})
export class WeatherForecast implements OnInit {
  
  @Input() clasStyle: string = 'active'
  
  constructor() { }

  ngOnInit(): void {
  }

}
