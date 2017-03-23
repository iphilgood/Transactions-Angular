import { Injectable, EventEmitter } from '@angular/core';
import { TransactionResourceService } from '../resources/transaction-resource.service';
import { Transaction } from '../models/index';

@Injectable()
export class TransactionService {

  public transactionsChange: EventEmitter<Transaction[]> = new EventEmitter<Transaction[]>();

  constructor(private resource: TransactionResourceService) {
  }

  public getBetween(from: Date, to: Date): void {
    this.resource.getBetween(from, to).subscribe(
      (data: Transaction[]) => {
        this.transactionsChange.emit(data);
      }
    );
  }

  public getLatest(count: number = 3): void {
    this.resource.getLatest(count).subscribe(
      (data: Transaction[]) => {
        this.transactionsChange.emit(data);
      }
    );
  }
}
