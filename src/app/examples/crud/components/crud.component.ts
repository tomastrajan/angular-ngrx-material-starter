import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';

import { takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

import { State } from '../../examples.state';
import { Book, BookState } from '../books.model';
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

  bookFormGroup = this.fb.group(
    this.createBook(new Date().getUTCMilliseconds().toString())
  );
  books: Observable<Book[]>;
  bookState: BookState;
  selectedBook: Observable<Book>;
  isEditing: boolean;

  constructor(public store: Store<State>, public fb: FormBuilder) {}

  ngOnInit() {
    this.store
      .pipe(select(selectBooks), takeUntil(this.unsubscribe$))
      .subscribe(books => {
        this.store.dispatch(new ActionBooksPersist({ books }));
      });
    this.books = this.store.pipe(select(selectAllBooks));
    this.selectedBook = this.store.pipe(select(selectCurrentBook));
  }

  createBook(bookId: string): Book {
    return {
      id: bookId,
      title: '',
      author: '',
      description: ''
    };
  }

  select(book: Book) {
    this.bookFormGroup.setValue(book);
    this.store.dispatch(new ActionBookSelect(book.id));
    this.isEditing = !this.isEditing;
  }

  delete(id: string, form: NgForm) {
    this.store.dispatch(new DeleteOne(id));
    this.clearForm(form);
  }

  onSubmit(book: Book) {
    if (this.bookFormGroup.valid) {
      this.store.dispatch(
        book
          ? new UpdateOne(book.id, this.bookFormGroup.value)
          : new AddOne(this.bookFormGroup.value)
      );
      this.select(this.bookFormGroup.value);
      this.isEditing = false;
    }
  }

  clearForm(form: NgForm) {
    form.resetForm();
    this.bookFormGroup.setValue(
      this.createBook(new Date().getUTCMilliseconds().toString())
    );
    this.store.dispatch(new ActionBookSelect(null));
  }
}
