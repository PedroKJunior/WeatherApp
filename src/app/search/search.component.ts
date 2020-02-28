import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SearchService } from './search.service';
import _ from "loadsh";

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class Search implements OnInit {

  @Input() city:string = ""
  @Input() citys:Array<Object> = []

  searchService: SearchService

  constructor( _searchService: SearchService ) { 
    this.searchService = _searchService
  }

  ngOnInit(): void {  }
  
  async handleClick(): Promise<void> {
    this.citys = await this.searchService.getCity(this.city)
  }

}
