import { Component, OnInit } from '@angular/core';
import {TransactionHistories} from '../../models/transaction-histories';
import {TransactionHistoriesService} from '../../services/transaction-histories.service';
import {ToastrService} from 'ngx-toastr';
import {TransactionDto} from '../../models/transaction-dto';
import {WalletService} from '../../services/wallet.service';

@Component({
  selector: 'app-transaction-container',
  templateUrl: './transaction-container.component.html',
  styleUrls: ['./transaction-container.component.css']
})
export class TransactionContainerComponent implements OnInit {

  transactionHistories: TransactionHistories[];

  constructor(private transactionHistoriesService: TransactionHistoriesService,
              private walletService: WalletService,
              private toast: ToastrService) { }

  ngOnInit() {
    this.fetchTransactions();
  }

  fetchTransactions() {
    this.transactionHistoriesService.fetchAll().subscribe(
      (transactionHistories: TransactionHistories[]) => this.transactionHistories = transactionHistories
    );
  }

  createTransaction(transactionDto: TransactionDto) {
    this.walletService.post(transactionDto)
      .subscribe(() => this.fetchTransactions(), (response) => this.showError(response), () => this.showSuccess());
  }

  showSuccess() {
    this.toast.success('Transaction Success!');
  }

  showError(response) {
    this.toast.error(response.error.message);
  }

}
