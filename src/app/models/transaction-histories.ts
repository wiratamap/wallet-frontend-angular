import {Wallet} from './wallet';

export interface TransactionHistories {
  id: string;
  amount: number;
  transactionType: string;
  transactionDate: number;
  wallet: Wallet;
}
