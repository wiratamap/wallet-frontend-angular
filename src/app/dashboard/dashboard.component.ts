import { Component, OnInit } from '@angular/core';
import {WalletService} from '../services/wallet.service';
import {Wallet} from '../models/wallet';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  walletInformation: Wallet;

  constructor(private walletService: WalletService) { }

  ngOnInit() {
    this.walletService.fetch().subscribe(
      (walletInformation: Wallet) => this.walletInformation = walletInformation
    );
  }

}
