import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Input() index: number;
  @Output() removeTodo = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  deleteTodo() {
    this.removeTodo.emit(this.index);
  }
}
