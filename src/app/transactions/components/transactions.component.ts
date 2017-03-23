import { Component, OnInit } from '@angular/core';
import { TransactionService } from "../services";
import { Transaction } from "../models/";

@Component({
  selector: 'wed-transactions',
  templateUrl: 'transactions.component.html',
  styleUrls: ['transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  transactions: Transaction[] = [];
  
  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.transactionService.transactionsChange.subscribe(
      (transactions) => {
        this.transactions = transactions;
      }
    );
    var date = new Date();
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
    this.transactionService.getBetween(firstDay, lastDay);
  }
}
