import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TransactionContainerComponent} from './transaction-container.component';
import {HttpClientTestingModule} from '../../../../node_modules/@angular/common/http/testing';
import Spy = jasmine.Spy;
import {TransactionHistoriesService} from '../../services/transaction-histories.service';
import {By} from '@angular/platform-browser';
import {TransactionListComponent} from '../transaction-list/transaction-list.component';
import {TransactionFormComponent} from '../transaction-form/transaction-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {WalletService} from '../../services/wallet.service';
import {mockTransactionDto} from '../../services/mock-data';

describe('TransactionContainerComponent', () => {
  let component: TransactionContainerComponent;
  let fixture: ComponentFixture<TransactionContainerComponent>;
  let transactionHistoriesService: TransactionHistoriesService;
  let walletService: WalletService;
  let spy: Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      declarations: [TransactionContainerComponent, TransactionListComponent, TransactionFormComponent],
      providers: [
        { provide: ToastrService},
      ],
    })
      .compileComponents();

    transactionHistoriesService = TestBed.get(TransactionHistoriesService);
    walletService = TestBed.get(WalletService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the the fetchAll on transaction histories service', () => {
    spy = spyOn(transactionHistoriesService, 'fetchAll').and.returnValue({
      subscribe: () => {
      }
    });

    component.fetchTransactions();
    expect(transactionHistoriesService.fetchAll).toHaveBeenCalled();
  });

  it('should call the fetchAll every ngOnInit', () => {
    spy = spyOn(transactionHistoriesService, 'fetchAll').and.returnValue({
      subscribe: () => {
      }
    });

    component.ngOnInit();
    expect(transactionHistoriesService.fetchAll).toHaveBeenCalled();
  });

  it('should have transaction list component', () => {
    const transactionListComponent = fixture.debugElement.query(By.directive(TransactionListComponent));

    expect(transactionListComponent).toBeTruthy();
  });

  it('should pass the transaction histories properly', () => {
    const transactionHistoriesProperty = fixture.debugElement.query(By.directive(TransactionListComponent)).attributes;

    expect(transactionHistoriesProperty).toBeTruthy();
  });

  it('should have transaction form component', () => {
    const transactionListComponent = fixture.debugElement.query(By.directive(TransactionFormComponent));

    expect(transactionListComponent).toBeTruthy();
  });

  it('should call the post when create transaction is triggered', () => {
    spy = spyOn(walletService, 'post').and.returnValue({
      subscribe: () => {
      }
    });

    component.createTransaction(mockTransactionDto);
    expect(walletService.post).toHaveBeenCalled();
  });
});
