import { selectTodosFilter } from './../todos.selectors';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { select, Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

import {
  ROUTE_ANIMATIONS_ELEMENTS,
  NotificationService
} from '../../../../core/core.module';

import * as todoActions from '../todos.actions';
import { Todo, TodosFilter } from '../todos.model';
import { selectTodos, selectRemoveDoneTodosDisabled } from '../todos.selectors';

@Component({
  selector: 'anms-todos',
  templateUrl: './todos-container.component.html',
  styleUrls: ['./todos-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosContainerComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  todos$: Observable<Todo[]>;
  filter$: Observable<TodosFilter>;
  removeDoneDisabled$: Observable<boolean>;
  newTodo = '';

  constructor(
    public store: Store,
    public snackBar: MatSnackBar,
    public translateService: TranslateService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.todos$ = this.store.pipe(select(selectTodos));
    this.filter$ = this.store.pipe(select(selectTodosFilter));
    this.removeDoneDisabled$ = this.store.pipe(
      select(selectRemoveDoneTodosDisabled)
    );
  }

  get isAddTodoDisabled() {
    return this.newTodo.length < 4;
  }

  onNewTodoChange(newTodo: string) {
    this.newTodo = newTodo;
  }

  onNewTodoClear() {
    this.newTodo = '';
  }

  onAddTodo() {
    this.store.dispatch(todoActions.actionTodosAdd(this.newTodo));
    const addedMessage = this.translateService.instant(
      'anms.examples.todos.added.notification',
      { name: this.newTodo }
    );
    this.notificationService.info(addedMessage);
    this.newTodo = '';
  }

  onToggleTodo(todo: Todo) {
    this.store.dispatch(todoActions.actionTodosToggle({ id: todo.id }));
    const newStatus = this.translateService.instant(
      `anms.examples.todos.filter.${todo.done ? 'active' : 'done'}`
    );
    const undo = this.translateService.instant('anms.examples.todos.undo');
    const toggledMessage = this.translateService.instant(
      'anms.examples.todos.toggle.notification',
      { name: todo.name }
    );

    this.snackBar
      .open(`${toggledMessage} ${newStatus}`, undo, {
        duration: 2500,
        panelClass: 'todos-notification-overlay'
      })
      .onAction()
      .pipe(take(1))
      .subscribe(() => this.onToggleTodo({ ...todo, done: !todo.done }));
  }

  onRemoveDoneTodos() {
    this.store.dispatch(todoActions.actionTodosRemoveDone());
    const removedMessage = this.translateService.instant(
      'anms.examples.todos.remove.notification'
    );
    this.notificationService.info(removedMessage);
  }

  onFilterTodos(filter: TodosFilter) {
    this.store.dispatch(todoActions.actionTodosFilter({ filter }));
    const filterToMessage = this.translateService.instant(
      'anms.examples.todos.filter.notification'
    );
    const filterMessage = this.translateService.instant(
      `anms.examples.todos.filter.${filter.toLowerCase()}`
    );
    this.notificationService.info(`${filterToMessage} ${filterMessage}`);
  }
}
