import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Customer} from '../customer';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customers: Customer[];
  message: string;
  @Output() customerClick = new EventEmitter<Customer>();
  constructor(private customerService: CustomerService) { }
  ngOnInit() {
    this.getList();
  }
  getList() {
    const updateCustomersEvent = this.customerService.getListCustomer();

    updateCustomersEvent.subscribe( newList => {
      this.customers = newList;
    }, error => {
      console.log('Lỗi gì đó!', error);
      this.message = error.message;
    });
  }
  selectCustomer(customer: Customer) {
    this.customerClick.emit(customer);
  }
}
