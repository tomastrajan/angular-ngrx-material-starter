import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../core/animations/route.animations';

import { User, UserService } from '../user.service';

@Component({
  selector: 'anms-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  userForm: FormGroup;
  users$: Observable<User[]>;
  isEdit$: Observable<{ value: boolean }>;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.users$ = this.userService.users$;

    this.userForm = this.fb.group({
      id: '',
      username: ['', [Validators.required, Validators.minLength(5)]],
      name: ['', [Validators.required, Validators.minLength(5)]],
      surname: ['', [Validators.required, Validators.minLength(5)]]
    });

    this.isEdit$ = this.userForm.get('id').valueChanges.pipe(
      startWith(''),
      map((id) => ({ value: (id || '').length > 0 }))
    );
  }

  removeUser(id: string) {
    this.userService.removeUser(id);
  }

  editUser(user: User) {
    this.userForm.patchValue({ ...user });
  }

  onSubmit(userFormRef: FormGroupDirective) {
    if (this.userForm.valid) {
      const data = this.userForm.getRawValue();
      if (data.id && data.id.length) {
        this.userService.updateUser(data);
      } else {
        this.userService.addUser({ ...data });
      }
      userFormRef.resetForm();
      this.userForm.reset();
    }
  }

  trackByUserId(index: number, user: User): string {
    return user.id;
  }
}
