import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  newTodo: string;
  filterType: string;
  toggle: boolean;

  constructor() { }

  ngOnInit() {
    this.todos = [];
    this.toggle = true;
    this.filterType = 'all';
  }
  removeTodoA(index: number) {
    this.todos.splice(index, 1);
    this.toggle = !this.toggle;
  }
  addTodo() {
    this.todos.push({
      isDone: false,
      task: this.newTodo
    });
    this.newTodo = '';
    this.toggle = !this.toggle;
  }
}
