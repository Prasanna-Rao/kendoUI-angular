import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test',
  template: `
            
            
            <h1>{{"Hello " + name}}</h1>
            <button kendoButton [togglable]="true" (click) = "fireEvent()">toggle</button>
           
              `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input('parentData') public name;

  @Output() public childEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

 fireEvent() {
   this.childEvent.emit('hey parent');
 }

 

}
