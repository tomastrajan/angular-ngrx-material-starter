import { v4 as uuid } from 'uuid';
import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

import { State } from '../../examples.state';
import { Book } from '../books.model';
import { ActionBooksUpsertOne, ActionBooksDeleteOne } from '../books.actions';
import { selectSelectedBook, selectAllBooks } from '../books.selectors';

@Component({
  selector: 'anms-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrudComponent implements OnInit, OnDestroy {
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

  constructor(
    public store: Store<State>,
    public fb: FormBuilder,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.books$ = this.store.pipe(select(selectAllBooks));
    this.store
      .pipe(
        select(selectSelectedBook),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(book => {
        this.selectedBook = book;
        this.cd.markForCheck();
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  select(bookId: string) {
    this.isEditing = false;
    this.router.navigate(['examples/crud', bookId]);
  }

  deselect() {
    this.isEditing = false;
    this.router.navigate(['examples/crud']);
  }

  edit() {
    this.isEditing = true;
    this.bookFormGroup.setValue(this.selectedBook);
  }

  addNew(bookForm: NgForm) {
    bookForm.resetForm();
    this.bookFormGroup.reset();
    this.bookFormGroup.setValue(CrudComponent.createBook());
    this.isEditing = true;
  }

  cancelEditing() {
    this.isEditing = false;
  }

  delete() {
    this.store.dispatch(new ActionBooksDeleteOne({ id: this.selectedBook.id }));
    this.isEditing = false;
    this.router.navigate(['examples/crud']);
  }

  save() {
    if (this.bookFormGroup.valid) {
      const book = this.bookFormGroup.value;
      this.store.dispatch(new ActionBooksUpsertOne({ book }));
      this.isEditing = false;
      this.router.navigate(['examples/crud', book.id]);
    }
  }
}
