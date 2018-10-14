import {TestBed} from '@angular/core/testing';

import {WalletService} from './wallet.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {endpoint} from '../../config';
import {expectedWallet, mockTransactionDto} from './mock-data';
import {TransactionDto} from '../models/transaction-dto';

describe('WalletService', () => {
  let walletService: WalletService;
  let mockHttp: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        WalletService
      ]
    });

    walletService = TestBed.get(WalletService);
    mockHttp = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: WalletService = TestBed.get(WalletService);
    expect(service).toBeTruthy();
  });

  it('should successfully get wallet information', async (done) => {
    walletService.fetch()
      .subscribe(response => {
        expect(response).toEqual(expectedWallet);
        done();
      });

    const walletRequest = mockHttp.expectOne(endpoint.WALLET_INFORMATION_API);
    walletRequest.flush(expectedWallet);

    mockHttp.verify();
  });

  it('should return empty wallet when there is no wallet found', (done) => {
    walletService.fetch()
      .subscribe((response: any) => {
        expect(response).toEqual({});
        done();
      });

    const walletRequest = mockHttp.expectOne(endpoint.WALLET_INFORMATION_API);
    walletRequest.flush({});

    mockHttp.verify();
  });

  it('should post the proper data and request method', (done) => {
    walletService.post(mockTransactionDto).subscribe((data: TransactionDto) => {
      expect(data.amount).toEqual(15000);
      expect(data.transactionType).toEqual('CREDIT');
      done();
    });

    const req = mockHttp.expectOne((request) => request.method === 'POST' && request.url === endpoint.CREATE_TRANSACTION_API);

    expect(req.request.method).toEqual('POST');

    req.flush(mockTransactionDto);

    mockHttp.verify();
  });
});
