import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  message: string;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }
  createCustomer(customerForm) {
    console.log(customerForm.value);
    this.customerService.createCustomer(customerForm.value);
  }
}
