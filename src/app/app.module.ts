import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Search } from './search/search.component';
import { SearchService } from './search/search.service'
import { Card } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    Search,
    Card
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ SearchService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
