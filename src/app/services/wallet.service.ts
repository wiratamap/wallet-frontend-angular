import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {endpoint} from '../../config';
import {TransactionDto} from '../models/transaction-dto';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private http: HttpClient) { }

  fetch() {
    return this.http.get(endpoint.WALLET_INFORMATION_API);
  }

  post(transactionDto: TransactionDto) {
    const params = new HttpParams()
      .set('transaction_type', transactionDto.transactionType)
      .set('amount', transactionDto.amount.toString());

    return this.http.post(endpoint.CREATE_TRANSACTION_API, {}, {params: params});
  }
}
