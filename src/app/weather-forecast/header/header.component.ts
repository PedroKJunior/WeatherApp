import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  @Input() city:string = ""
  @Input() citys:Array<Object> = []
  alert: boolean = false

  err(): void {
    document.getElementById('input-search').classList.add('shake')
    this.alert= true
  }

  keyPress(event: any): void {
    if (event.key === 'Enter')
      this.handleClick()
  }
  
  handleFocus() {
    this.alert = false
  }
  
  async handleClick(): Promise<void> {
    if(this.city === '') {
      this.err() 
    } else {
      //this.citys = await this.searchService.getCity(this.city)
    }

    setTimeout(()=>{
      const input = document.getElementById('input-search')
      input.classList.remove('shake')
      input.blur()

    }, 1000)
  }

}
