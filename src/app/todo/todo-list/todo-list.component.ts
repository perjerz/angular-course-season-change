import { Component, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit() {
    this.todos = [];
    this.filterType = 'all';
  }
  removeTodoA(index: number) {
    console.log(
      index,
      this.todos.slice(0, index),
      this.todos.slice(index + 1, this.todos.length)
    );
    this.todos = [
      ...this.todos.slice(0, index),
      ...this.todos.slice(index + 1, this.todos.length)
    ];
  }
  addTodo() {
    const newTodo = {
      isDone: false,
      task: this.newTodo
    };
    this.todos = [...this.todos, newTodo];
    this.newTodo = '';
  }
  toggleTodo(index: number) {
    const toggledTodo: Todo = {
      ...this.todos[index],
      isDone: !this.todos[index].isDone
    };
    this.todos = [
      ...this.todos.slice(0, index),
      toggledTodo,
      ...this.todos.slice(index + 1, this.todos.length)
    ];
  }
}
