import { EntityState } from '@ngrx/entity';

export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
}
// For extending the BookState Interface, we could always use
// export interface BookState extends EntityState<Book> {}
export type BookState = EntityState<Book>;
