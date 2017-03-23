import { Injectable, EventEmitter } from '@angular/core';
import { AccountResourceService } from '../resources/account-resource.service';
import { BankAccount } from '../models';
import { Transaction } from '../../transactions/models';

@Injectable()
export class AccountService {

  public bankAccountChange: EventEmitter<BankAccount> = new EventEmitter<BankAccount>();
  public transactionSuccessfulChange: EventEmitter<Transaction> = new EventEmitter<Transaction>();

  constructor(private resource: AccountResourceService) {
  }

  public getMe(): void {
    this.resource.getMe().subscribe(
      (data: BankAccount) => {
        this.bankAccountChange.emit(data);
      }
    );
  }

  public getByAccountNr(accountNr: number): void {
    this.resource.getByAccountNr(accountNr).subscribe(
      (data: BankAccount) => {
        this.bankAccountChange.emit(data);
      }
    );
  }

  public transfer(target: string, amount: number): void {
    this.resource.transfer(target, amount).subscribe(
      (data: Transaction) => {
        this.transactionSuccessfulChange.emit(data);
      }
    );
  }
}
