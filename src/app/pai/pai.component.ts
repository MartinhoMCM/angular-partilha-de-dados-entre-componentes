import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements OnInit {

  constructor() { }
  message:any='';

  ngOnInit() {
  }
  event = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599.99,
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  }

  handleClickedEvent(event){
    this.message =event;
  }
}
