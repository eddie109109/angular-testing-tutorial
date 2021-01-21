import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  // constructor() { } // when we use Input, we don't need a constructor here

  @Input() hero1: any;

  ngOnInit(): void {
    console.log("hero is", this.hero1);
    this.callParentFunction.emit("data from the child");// this is the event emitter;
  }

  @Output() callParentFunction:EventEmitter<any> = new EventEmitter<any>();
  // this is the event emitter;

  testEventEmiter() {
    this.callParentFunction.emit("emitting from the users child component");
  }
}
