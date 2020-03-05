import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private api_key:string = environment.API_KEY

  constructor() {}

  getCity(city:string) {
    return axios.get(`https://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=${this.api_key}`)
      .then( object => object.data.list )
      .catch( err => { console.log(err) })
  }
}
