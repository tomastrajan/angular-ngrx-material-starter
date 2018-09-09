import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';

import { takeUntil, map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

import { State } from '../../examples.state';
import { Book } from '../books.model';
import {
  ActionBooksPersist,
  AddOne,
  DeleteOne,
  UpdateOne,
  ActionBookSelect
} from '../books.actions';
import {
  selectBooks,
  selectCurrentBook,
  selectAllBooks
} from '../books.selectors';

@Component({
  selector: 'anms-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  private unsubscribe$: Subject<void> = new Subject<void>();

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  emptyBook: Book = {
    id: new Date().getUTCMilliseconds().toString(),
    title: '',
    author: '',
    description: ''
  };
  bookFormGroup = this.fb.group(this.emptyBook);
  books: Book[];
  selectedBook: Book | null;
  isEditing: boolean;

  constructor(public store: Store<State>, public fb: FormBuilder) {}

  ngOnInit() {
    this.store
      .pipe(select(selectBooks), takeUntil(this.unsubscribe$))
      .subscribe(books => {
        this.store.dispatch(new ActionBooksPersist({ books }));
      });
    this.store
      .pipe(
        select(selectAllBooks),
        takeUntil(this.unsubscribe$),
        map(b => b.sort((b1, b2) => (b1.title > b2.title ? 1 : -1)))
      )
      .subscribe(books => {
        this.books = books;
      });
    this.store
      .pipe(select(selectCurrentBook), takeUntil(this.unsubscribe$))
      .subscribe(book => {
        if (book !== undefined) {
          this.selectedBook = book;
          this.bookFormGroup.setValue(book);
        } else {
          this.selectedBook = null;
        }
      });
  }

  select(book: Book) {
    this.store.dispatch(new ActionBookSelect(book.id));
  }

  onSubmit() {
    if (this.bookFormGroup.valid) {
      this.store.dispatch(
        this.selectedBook
          ? new UpdateOne(
              this.bookFormGroup.get('id').value,
              this.bookFormGroup.value
            )
          : new AddOne(this.bookFormGroup.value)
      );
      this.select(this.bookFormGroup.value);
      this.isEditing = false;
    }
  }

  delete(form: NgForm) {
    this.store.dispatch(new DeleteOne(this.selectedBook.id));
    this.clearForm(form);
  }

  clearForm(form: NgForm) {
    form.resetForm();
    this.emptyBook.id = new Date().getUTCMilliseconds().toString();
    this.bookFormGroup.setValue(this.emptyBook);
    this.store.dispatch(new ActionBookSelect(null));
  }
}
