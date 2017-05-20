import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/map';

import { addTodo } from './todos.reducer';

@Component({
  selector: 'anms-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, OnDestroy {

  private unsubscribe$: Subject<void> = new Subject<void>();

  todos: any;
  newTodo = '';

  inputActions = [
    { type: 'add', icon: 'add', color: 'accent'},
    { type: 'remove', icon: 'delete_forever'}
  ];

  constructor(
    public store: Store<any>
  ) {}

  ngOnInit() {
    this.store
      .select('todos')
      .takeUntil(this.unsubscribe$)
      .subscribe(todos => (this.todos = todos));
  }


  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onNewTodoChange(newTodo: string) {
    this.newTodo = newTodo;
  }

  onAddTodo() {
    this.store.dispatch(addTodo(this.newTodo));
    this.newTodo = '';
  }

}
