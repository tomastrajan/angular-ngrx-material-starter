import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators/takeUntil';

import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';

import {
  ActionTodosAdd,
  ActionTodosPersist,
  ActionTodosFilter,
  ActionTodosRemoveDone,
  ActionTodosToggle,
  selectorTodos,
  Todo,
  TodosFilter
} from './todos.reducer';

@Component({
  selector: 'anms-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  todos: any;
  newTodo = '';

  constructor(public store: Store<any>) {}

  ngOnInit() {
    this.store
      .select(selectorTodos)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(todos => {
        this.todos = todos;
        this.store.dispatch(new ActionTodosPersist({ todos }));
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

  onNewTodoClear() {
    this.newTodo = '';
  }

  onAddTodo() {
    this.store.dispatch(new ActionTodosAdd({ name: this.newTodo }));
    this.newTodo = '';
  }

  onToggleTodo(todo: Todo) {
    this.store.dispatch(new ActionTodosToggle({ id: todo.id }));
  }

  onRemoveDoneTodos() {
    this.store.dispatch(new ActionTodosRemoveDone());
  }

  onFilterTodos(filter: TodosFilter) {
    this.store.dispatch(new ActionTodosFilter({ filter }));
  }
}
