import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/map';

import {
  addTodo, persistTodos, toggleTodo, removeDoneTodos, Todo, filterTodos,
  TodoFilter
} from './todos.reducer';

@Component({
  selector: 'anms-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, OnDestroy {

  private unsubscribe$: Subject<void> = new Subject<void>();

  todos: any;
  newTodo = '';

  constructor(
    public store: Store<any>
  ) {}

  ngOnInit() {
    this.store
      .select('todos')
      .takeUntil(this.unsubscribe$)
      .subscribe(todos => {
        this.todos = todos;
        this.store.dispatch(persistTodos(todos));
      });
  }


  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  get filteredTodos() {
    const filter = this.todos.filter;
    if (filter === 'ALL') {
      return this.todos.items;
    } else {
      const predicate = filter === 'DONE' ? t => t.done : t => !t.done;
      return this.todos.items.filter(predicate);
    }
  }

  get isAddTodoDisabled() {
    return this.newTodo.length < 4;
  }

  get isRemoveDoneTodosDisabled() {
    return this.todos.items.filter(item => item.done).length === 0;
  }

  onNewTodoChange(newTodo: string) {
    this.newTodo = newTodo;
  }

  onAddTodo() {
    this.store.dispatch(addTodo(this.newTodo));
    this.newTodo = '';
  }

  onToggleTodo(todo: Todo) {
    this.store.dispatch(toggleTodo(todo.id));
  }

  onRemoveDoneTodos() {
    this.store.dispatch(removeDoneTodos());
  }

  onFilterTodos(filter: TodoFilter) {
    this.store.dispatch(filterTodos(filter));
  }

}
