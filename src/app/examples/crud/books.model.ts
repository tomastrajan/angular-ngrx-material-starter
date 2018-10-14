import { EntityState } from '@ngrx/entity';

export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
}

export interface BookState extends EntityState<Book> {}
