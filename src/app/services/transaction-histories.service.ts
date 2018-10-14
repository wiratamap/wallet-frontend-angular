import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {endpoint} from '../../config';

@Injectable({
  providedIn: 'root'
})
export class TransactionHistoriesService {

  constructor(private http: HttpClient) { }

  fetchAll() {
    const params = new HttpParams().set('account_id', '0dce0a31-321a-4f42-9261-d59ed9ad4308');

    return this.http.get(endpoint.TRANSACTION_HISTORIES_API, {params: params});
  }
}
