import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnInit {

  @Output() createTransaction: EventEmitter<any> = new EventEmitter();

  transactionForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.transactionForm = new FormGroup({
      amount: new FormControl('', Validators.compose([
        Validators.required,
        Validators.min(1)
      ])),
      transactionType: new FormControl('', Validators.required)
    });
  }

  handleSubmit() {
    this.createTransaction.emit(this.transactionForm.value);
    this.transactionForm.reset();
  }
}
