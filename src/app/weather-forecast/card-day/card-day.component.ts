import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'Card-day',
  templateUrl: './card-day.component.html',
  styleUrls: ['./card-day.component.sass']
})
export class CardDay implements OnInit {

  @Input() clasStyle: string = ''

  constructor() { }

  ngOnInit(): void {
    console.log(this.clasStyle)
  }

}
