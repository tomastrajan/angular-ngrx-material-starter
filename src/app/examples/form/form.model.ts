import { Observable } from 'rxjs';

export interface Form {
  firstname: string;
  lastname: string;
  email: string;
  description: string;
  requestGift: boolean;
  age: number;
  dob: Date;
  address: {
    country: string;
    state: string;
    city: string;
    street: string;
    zip: number;
    numero: number;
  };
  rating: number;
}

export interface FormState {
  loading: boolean;
  form?: Form;
  error?: Observable<never>;
}
