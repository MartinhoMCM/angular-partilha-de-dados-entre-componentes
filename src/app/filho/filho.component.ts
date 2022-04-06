import { Component, Input, OnInit, Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {

  @Input() event;
  @Output() outPutEvent =new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  
  handleClicked(){
    this.outPutEvent.emit('Martinho Mussamba');
  }



}
