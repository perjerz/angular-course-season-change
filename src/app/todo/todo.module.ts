import { FilterTodoPipe } from './filter-todo.pipe';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo-item/todo-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoComponent, TodoListComponent, FilterTodoPipe],
  imports: [CommonModule, FormsModule],
  exports: [TodoListComponent]
})
export class TodoModule {}
