import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'Card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class Card implements OnInit {

  @Input() properties
  icon: string
  flag: string

  constructor() { }

  ngOnInit(): void {
    this.icon = this.properties.weather[0].icon
    this.flag = (this.properties.sys.country).toLowerCase()
  }

}
