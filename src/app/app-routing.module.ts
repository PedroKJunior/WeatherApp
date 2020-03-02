import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Search } from './search/search.component';
import { WeatherForecast } from './weather-forecast/weather-forecast.component'

const routes: Routes = [
  { path: '', component: Search},
  { path: 'weather-forecast', component: WeatherForecast }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
