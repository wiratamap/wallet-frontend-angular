import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionFormComponent } from './transaction-form.component';
import {By} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {mockTransactionDto} from '../../services/mock-data';

describe('TransactionFormComponent', () => {
  let component: TransactionFormComponent;
  let fixture: ComponentFixture<TransactionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ TransactionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionFormComponent);
    component = fixture.componentInstance;
    component.ngOnInit();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have form element', () => {
    const formElement = fixture.debugElement.query(By.css('form'));

    expect(formElement).toBeTruthy();
  });

  it('should have amount input', () => {
    const amountInputElement = fixture.debugElement.query(By.css('#amount'));

    expect(amountInputElement).toBeTruthy();
  });

  it('should have transaction type select input', () => {
    const selectInputElement = fixture.debugElement.query(By.css('#transaction-type'));

    expect(selectInputElement).toBeTruthy();
  });

  it('should have button that represents submit', () => {
    const submitButtonElement = fixture.debugElement.query(By.css('button'));

    expect(submitButtonElement).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.transactionForm.valid).toBeFalsy();
  });

  it('should have proper amount value', () => {
    const amount = component.transactionForm.controls['amount'];
    amount.setValue(100);
    expect(amount.value).toEqual(100);
  });

  it('should not valid when amount input is empty', () => {
    const amount = component.transactionForm.controls['amount'];
    expect(amount.valid).toBeFalsy();
  });

  it('should have proper transaction type value', () => {
    const transactionType = component.transactionForm.controls['transactionType'];
    transactionType.setValue('CREDIT');
    expect(transactionType.value).toEqual('CREDIT');
  });

  it('should not valid when transaction type select is empty', () => {
    const transactionType = component.transactionForm.controls['transactionType'];
    expect(transactionType.valid).toBeFalsy();
  });

  it('should reset the value after submit the form', () => {
    component.transactionForm.controls['amount'].setValue(15000);
    component.transactionForm.controls['transactionType'].setValue('CREDIT');

    component.handleSubmit();

    expect(component.transactionForm.valid).toBeFalsy();
  });

  it('should emits the proper value when submit the form', () => {
    expect(component.transactionForm.valid).toBeFalsy();
    component.transactionForm.controls['amount'].setValue(15000);
    component.transactionForm.controls['transactionType'].setValue('CREDIT');
    expect(component.transactionForm.valid).toBeTruthy();

    let createTransaction = jasmine.createSpy('createTransaction', () => {});
    component.createTransaction.subscribe((callbackFn) => createTransaction = callbackFn);

    component.handleSubmit();

    expect(createTransaction).toEqual(mockTransactionDto);
  });
});
