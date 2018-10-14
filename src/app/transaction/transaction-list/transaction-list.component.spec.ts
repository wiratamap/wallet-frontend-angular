import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionListComponent } from './transaction-list.component';
import {By} from '@angular/platform-browser';
import {expectedTransactionHistories} from '../../services/mock-data';

describe('TransactionListComponent', () => {
  let component: TransactionListComponent;
  let fixture: ComponentFixture<TransactionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have table element', () => {
    const tableElement = fixture.debugElement.query(By.css('table'));

    expect(tableElement).toBeTruthy();
  });

  it('should show the transactionHistories as an input', () => {
    component.transactionHistories = expectedTransactionHistories;

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('td').innerText).toEqual('something');
  });
});
