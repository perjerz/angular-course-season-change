import { Component, OnInit } from '@angular/core';
import { Todo } from './todo/shared/todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todos: Todo[];
  constructor() {}
  ngOnInit(): void {}
}
