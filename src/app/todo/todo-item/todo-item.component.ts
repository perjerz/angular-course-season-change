import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() task: string;
  @Input() index: number;
  @Input() isDone: boolean;
  @Output() toggleTodo = new EventEmitter();
  @Output() removeTodo = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}

  deleteTodo() {
    this.removeTodo.emit(this.index);
  }
  checkTodo() {
    this.toggleTodo.emit(this.index);
  }
}
