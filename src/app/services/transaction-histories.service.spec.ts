import { TestBed } from '@angular/core/testing';

import { TransactionHistoriesService } from './transaction-histories.service';
import {HttpClientTestingModule, HttpTestingController} from '../../../node_modules/@angular/common/http/testing';
import {expectedTransactionHistories, expectedWallet} from './mock-data';
import {endpoint} from '../../config';
import {HttpParams} from '../../../node_modules/@angular/common/http';

describe('TransactionHistoriesService', () => {
  let transactionHistoriesService: TransactionHistoriesService;
  let mockHttp: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        TransactionHistoriesService
      ]
    });

    transactionHistoriesService = TestBed.get(TransactionHistoriesService);
    mockHttp = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: TransactionHistoriesService = TestBed.get(TransactionHistoriesService);
    expect(service).toBeTruthy();
  });

  it('should successfully get transaction histories', async (done) => {
    transactionHistoriesService.fetchAll()
      .subscribe(response => {
        expect(response).toEqual(expectedTransactionHistories);
        done();
      });

    const params = new HttpParams().set('account_id', '0dce0a31-321a-4f42-9261-d59ed9ad4308');

    const walletRequest = mockHttp.expectOne(endpoint.TRANSACTION_HISTORIES_API + '?account_id=0dce0a31-321a-4f42-9261-d59ed9ad4308');
    walletRequest.flush(expectedTransactionHistories);

    mockHttp.verify();
  });

  it('should return empty data when there is no data', async (done) => {
    transactionHistoriesService.fetchAll()
      .subscribe(response => {
        expect(response).toEqual({});
        done();
      });

    const params = new HttpParams().set('account_id', '0dce0a31-321a-4f42-9261-d59ed9ad4308');

    const walletRequest = mockHttp.expectOne(endpoint.TRANSACTION_HISTORIES_API + '?account_id=0dce0a31-321a-4f42-9261-d59ed9ad4308');
    walletRequest.flush({});

    mockHttp.verify();
  });
});
