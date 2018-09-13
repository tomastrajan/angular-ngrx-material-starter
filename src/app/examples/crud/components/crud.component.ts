import { v4 as uuid } from 'uuid';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

import { State } from '../../examples.state';
import { Book } from '../books.model';
import {
  ActionBooksAddOne,
  ActionBooksDeleteOne,
  ActionBooksUpdateOne,
  ActionBooksSelect
} from '../books.actions';
import { selectSelectedBook, selectAllBooks } from '../books.selectors';

@Component({
  selector: 'anms-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  private unsubscribe$: Subject<void> = new Subject<void>();
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  bookFormGroup = this.fb.group(CrudComponent.createBook());
  books$: Observable<Book[]>;
  selectedBook: Book;
  isEditing: boolean;

  static createBook(): Book {
    return {
      id: uuid(),
      title: '',
      author: '',
      description: ''
    };
  }

  constructor(public store: Store<State>, public fb: FormBuilder) {}

  ngOnInit() {
    this.books$ = this.store.pipe(select(selectAllBooks));
    this.store
      .pipe(select(selectSelectedBook), takeUntil(this.unsubscribe$))
      .subscribe(book => (this.selectedBook = book));
  }

  select(id: string) {
    this.store.dispatch(new ActionBooksSelect({ id }));
    this.isEditing = false;
  }

  deselect() {
    this.store.dispatch(new ActionBooksSelect({ id: null }));
    this.isEditing = false;
  }

  edit() {
    this.isEditing = true;
    this.bookFormGroup.setValue(this.selectedBook);
  }

  addNew(bookForm: NgForm) {
    bookForm.resetForm();
    this.bookFormGroup.reset();
    this.bookFormGroup.setValue(CrudComponent.createBook());
    this.store.dispatch(new ActionBooksSelect({ id: null }));
    this.isEditing = true;
  }

  cancelEditing() {
    this.isEditing = false;
  }

  delete() {
    this.store.dispatch(new ActionBooksDeleteOne({ id: this.selectedBook.id }));
    this.isEditing = false;
  }

  save() {
    if (this.bookFormGroup.valid) {
      const book = this.bookFormGroup.value;
      this.store.dispatch(
        this.selectedBook
          ? new ActionBooksUpdateOne({
              update: {
                id: book.id,
                changes: book
              }
            })
          : new ActionBooksAddOne({ book })
      );
      this.select(book.id);
      this.isEditing = false;
    }
  }
}
