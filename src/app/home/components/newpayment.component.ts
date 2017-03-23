import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth/index';
import { BankAccount } from '../../dashboard/models';
import { AccountService } from '../../dashboard/services';

@Component({
  selector: 'wed-newpayment',
  templateUrl: 'newpayment.component.html',
  styleUrls: ['newpayment.component.scss']
})
export class NewPaymentComponent implements OnInit {

  bankAccount: BankAccount;
  isProcessing = false;

  constructor(private accountService: AccountService) {
  }

  ngOnInit() {
    this.accountService.bankAccountChange.subscribe(
      (bankAccount) => {
        this.bankAccount = bankAccount;
      }
    );

    this.accountService.transactionSuccessfulChange.subscribe(
      (transaction) => {
        console.log(transaction);
        this.isProcessing = false;
      }
    );

    this.accountService.getMe();
  }

  public pay(f: NgForm): boolean {
    if (f.valid) {
      this.isProcessing = true;
      this.accountService.transfer(f.value.target, f.value.amount);
    }
    return false;
  }
}
