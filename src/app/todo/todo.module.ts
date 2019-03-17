import { TodoListComponent } from './../todo-list/todo-list.component';
import { TodoComponent } from './todo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodoListComponent
  ]
})
export class TodoModule { }
