import { Todo } from './todo/todo';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTodo'
})
export class FilterTodoPipe implements PipeTransform {

  transform(todos: Todo[], filterType: string, toggle: boolean): Todo[] {
    if (filterType === 'done') {
      return todos.map((todo, index) => ({...todo, index})).filter(todo => todo.isDone === true);
    } else if (filterType === 'undone') {
      return todos.map((todo, index) => ({...todo, index})).filter(todo => todo.isDone === false);
    }
    return todos;
  }

}
