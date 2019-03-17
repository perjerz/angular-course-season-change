import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        task: 'ทำการบ้าน',
        isDone: false,
      },
      {
        task: 'ไปอ่านหนังสือ',
        isDone: false,
      }
    ];
  }
  removeTodoA(index: number) {
    this.todos.splice(index, 1);
  }
}
