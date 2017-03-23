import { Component, OnInit } from '@angular/core';
import { TransactionService } from "../../transactions/services";
import { Transaction } from "../../transactions/models";

@Component({
  selector: 'app-latest-transactions',
  templateUrl: './latest-transactions.component.html',
  styleUrls: ['./latest-transactions.component.css']
})
export class LatestTransactionsComponent implements OnInit {

  transactions: Transaction[] = [];
  
  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.transactionService.transactionsChange.subscribe(
      (transactions) => {
        this.transactions = transactions;
      }
    );
    this.transactionService.getLatest();
  }
}
