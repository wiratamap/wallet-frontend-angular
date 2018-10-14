export interface Wallet {
  id: string;
  balance: number;
  account: Account;
}

export interface Account {
  id: string;
  name: string;
  email: string;
}
