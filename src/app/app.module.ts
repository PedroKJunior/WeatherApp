import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Search } from './search/search.component';
import { SearchService } from './search/search.service'
import { Card } from './card/card.component';
import { WeatherForecast } from './weather-forecast/weather-forecast.component';
import { HeaderComponent } from './weather-forecast/header/header.component';
import { CardDay } from './weather-forecast/card-day/card-day.component';

@NgModule({
  declarations: [
    AppComponent,
    Search,
    Card,
    WeatherForecast,
    HeaderComponent,
    CardDay
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ SearchService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
