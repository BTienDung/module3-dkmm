import { Injectable } from '@angular/core';
import {Customer} from './customer';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [
    { id: 1,
      name: 'Dung',
      age: 19,
      address: 'Ha dong'
    },
    {
      id: 2,
      name: 'Hung',
      age: 24,
      address: 'My'
    },

    ];
  constructor() { }
  getListCustomer(): Observable<Customer[]> {
    return of(this.customers);
  }
  createCustomer(customer: Customer) {
    this.customers.push(customer);
  }
  deleteCustomer(id: number) {
    this.customers.slice(1, id);
  }
}
