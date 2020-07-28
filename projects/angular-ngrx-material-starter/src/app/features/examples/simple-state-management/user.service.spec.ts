import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });

    service = TestBed.inject<UserService>(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should provide initial users', (done) => {
    service.users$.subscribe((users) => {
      expect(users.length).toBe(3);
      done();
    });
  });

  it('should add user', (done) => {
    service.addUser({ username: 'test', name: 'Test', surname: 'Tester' });
    service.users$.subscribe((users) => {
      expect(users.length).toBe(4);
      expect(users[3].username).toBe('test');
      done();
    });
  });
});
