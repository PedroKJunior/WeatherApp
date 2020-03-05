import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  private api_key:string = environment.API_KEY

  constructor() { }

  getWeatherForecast(location_id:string) {
    return axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${location_id}&units=metric&appid=${this.api_key}`)
      .then( object => object.data.list)
      .catch( err => { console.log(err) })
  }
}
