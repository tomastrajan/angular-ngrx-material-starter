import { v4 as uuid } from 'uuid';
import { Injectable } from '@angular/core';
import { Model, ModelFactory } from '@angular-extensions/model';
import { Observable } from 'rxjs';

const INITIAL_DATA: User[] = [
  { id: uuid(), username: 'rockets', name: 'Elon', surname: 'Musk' },
  { id: uuid(), username: 'investing', name: 'Nassim', surname: 'Taleb' },
  { id: uuid(), username: 'philosophy', name: 'Yuval', surname: 'Harari' }
];

@Injectable()
export class UserService {
  users$: Observable<User[]>;

  private model: Model<User[]>;

  constructor(private modelFactory: ModelFactory<User[]>) {
    this.model = this.modelFactory.create([...INITIAL_DATA]);
    this.users$ = this.model.data$;
  }

  addUser(user: Partial<User>) {
    const users = this.model.get();

    users.push({ ...user, id: uuid() } as User);

    this.model.set(users);
  }

  updateUser(user: User) {
    const users = this.model.get();

    const indexToUpdate = users.findIndex((u) => u.id === user.id);
    users[indexToUpdate] = user;

    this.model.set(users);
  }

  removeUser(id: string) {
    const users = this.model.get();

    const indexToRemove = users.findIndex((user) => user.id === id);
    users.splice(indexToRemove, 1);

    this.model.set(users);
  }
}

export interface User {
  id: string;
  username: string;
  name: string;
  surname: string;
}
