import { Component, OnInit, Input } from '@angular/core'
import { SearchService } from './search.service'
import _ from "loadsh"

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class Search implements OnInit {

  @Input() city:string = ""
  @Input() citys:Array<Object> = []
  alert: boolean = false

  searchService: SearchService

  constructor( _searchService: SearchService ) { 
    this.searchService = _searchService
  }

  ngOnInit(): void {  }

  handleFocus() {
    this.alert = false
  }

  err(): void {
    document.getElementById('input-search').classList.add('shake')
    this.alert= true
  }

  keyPress(event: any): void {
    if (event.key === 'Enter')
      this.handleClick()
  }
  
  async handleClick(): Promise<void> {
    if(this.city === '') {
      this.err() 
    } else {
      this.citys = await this.searchService.getCity(this.city)
    }

    setTimeout(()=>{
      const input = document.getElementById('input-search')
      input.classList.remove('shake')
      input.blur()

    }, 1000)
  }

}
