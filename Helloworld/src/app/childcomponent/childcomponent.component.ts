import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})

export class ChildcomponentComponent implements OnInit {

  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onKeyPressed(childData){
    this.childEvent.emit(childData);
  }

}
