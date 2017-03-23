import { Component, OnInit } from '@angular/core';
import { TransactionService } from "../services";
import { Transaction } from "../models/";

@Component({
  selector: 'wed-transactions',
  templateUrl: 'transactions.component.html',
  styleUrls: ['transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  private _selectedYear: number;
  private _selectedMonth: number;

  years: number[];
  months: string[];

  transactions: Transaction[] = [];
  
  constructor(private transactionService: TransactionService) { 
    this.years = Array.from(Array(3)).map((x, i) => new Date().getFullYear() - i);
    this.months = Array.from(Array(12)).map((x, i) => new Date(`${i+1}/01/2000`).toLocaleString('en-us', { month: 'long' }));
  }

  ngOnInit() {
    this.transactionService.transactionsChange.subscribe(
      (transactions) => {
        this.transactions = transactions;
      }
    );

    var date = new Date();
    this._selectedYear = date.getFullYear();
    this._selectedMonth = date.getMonth();
    this.updateTransactions();
  }

  private updateTransactions(): void {
    let firstDay = new Date(this.selectedYear, this._selectedMonth, 1);
    let lastDay = new Date(this.selectedYear, this._selectedMonth + 1, 0)
    this.transactionService.getBetween(firstDay, lastDay);
  }

  public get selectedYear(): number {
    return this._selectedYear;
  }

  public set selectedYear(year: number) {
    this._selectedYear = year;
    this.updateTransactions();
  }

  public get selectedMonth(): number {
    return this._selectedMonth;
  }

  public set selectedMonth(month: number) {
    this._selectedMonth = month;
    this.updateTransactions();
  }
}
