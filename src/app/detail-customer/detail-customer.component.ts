import {Component, Input, OnInit} from '@angular/core';
import {CustomerService} from '../customer.service';
import {ActivatedRoute} from '@angular/router';
import {Customer} from '../customer';

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.css']
})
export class DetailCustomerComponent implements OnInit {
  @Input() customer: Customer;
  constructor(private customerService: CustomerService, private router: ActivatedRoute) { }
  ngOnInit() {
  }

}
