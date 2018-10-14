import {Component, Input, OnInit} from '@angular/core';
import {TransactionHistories} from '../../models/transaction-histories';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  @Input() transactionHistories: TransactionHistories[];

  constructor() { }

  ngOnInit() {
  }

}
