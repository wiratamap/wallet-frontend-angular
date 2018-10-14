import {Wallet} from '../models/wallet';
import {TransactionHistories} from '../models/transaction-histories';
import {TransactionDto} from '../models/transaction-dto';

export const expectedWallet: Wallet = {
  id: 'something',
  balance: 15000,
  account: {
    id: 'something',
    name: 'someone',
    email: 'something'
  }
};

export const expectedTransactionHistories: TransactionHistories[] = [
  {
    id: 'something',
    amount: 15000,
    transactionType: 'CREDIT',
    transactionDate: 1539439056978,
    wallet: expectedWallet
  }
];

export const mockTransactionDto: TransactionDto = {
  amount: 15000,
  transactionType: 'CREDIT'
};
