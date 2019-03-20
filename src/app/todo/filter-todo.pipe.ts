import { Todo } from './todo';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTodo'
})
export class FilterTodoPipe implements PipeTransform {
  transform(todos: Todo[], filterType: string, toggle: boolean): Todo[] {
    const todosAddIndex = todos.map((todo, index) => ({ ...todo, index }));
    if (filterType === 'done') {
      return todosAddIndex.filter(todo => todo.isDone === true);
    } else if (filterType === 'undone') {
      return todosAddIndex
        .map((todo, index) => ({ ...todo, index }))
        .filter(todo => todo.isDone === false);
    }
    return todosAddIndex.map((todo, index) => ({ ...todo, index }));
  }
}
