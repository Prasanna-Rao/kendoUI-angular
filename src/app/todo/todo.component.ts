import { Component, ViewEncapsulation} from '@angular/core';
import { trigger, transition, useAnimation, group, query, stagger, animateChild} from '@angular/animations';
import { slideIn, slideOut, moveDown } from './animations';


@Component({
  selector: 'todo',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  animations: [
    trigger('todoAnimations', [
      transition(':enter', [
        group([
          query('h1', [
            useAnimation(moveDown)
          ]),
          query('input', [
            useAnimation(moveDown)
          ]),
          query('@todoItem',
            stagger(100, animateChild()))
        ])
      ])
    ]),


    trigger ('todoItem',[
      transition(':enter', [
        useAnimation(slideIn)
      ]),
      transition(':leave', [
        useAnimation(slideOut)
      ]),
    ])
  ]
})
export class TodoComponent{

  todos = [
    {
      item: 'take dog to vet',
    },
    {
      item: 'get oil change',
    },
    {
      item: 'finish super hard puzzle',
    },
    {
      item: 'pack for denver',
    },
    {
      item: 'create to-do app',
    },
  ];

  addTodo(input: HTMLInputElement) {
    this.todos= [{item: input.value}, ...this.todos];
    input.value = '';
  }

  removeTodo(todo, i) {
    this.todos.splice(i,1);
  }

  constructor() { }

  ngOnInit() {
  }

}
