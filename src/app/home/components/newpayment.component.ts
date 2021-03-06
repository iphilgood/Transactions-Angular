import { Component, OnInit, AfterViewChecked, ViewChild, OnDestroy } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { AuthService } from '../../auth/index';
import { BankAccount } from '../../dashboard/models';
import { AccountService } from '../../dashboard/services';
import { TransactionService } from '../../transactions/services';
import { Transaction } from '../../transactions/models/';

@Component({
  selector: 'wed-newpayment',
  templateUrl: 'newpayment.component.html',
  styleUrls: ['newpayment.component.scss']
})
export class NewPaymentComponent implements OnInit {

  bankAccount: BankAccount;
  targetBankAccount: BankAccount;
  successfulTransaction: Transaction;
  isProcessing = false;
  targetBankAccountHasMinLength = false;

   @ViewChild('payForm') payForm: NgForm;

  constructor(private accountService: AccountService, private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.accountService.bankAccountChange.subscribe(
      (bankAccount) => {
        this.bankAccount = bankAccount;
      }
    );

    this.accountService.targetBankAccountChange.subscribe(
      (targetBankAccount) => {
        this.targetBankAccount = targetBankAccount;
      }
    );

    this.accountService.transactionSuccessfulChange.subscribe(
      (transaction) => {
        this.successfulTransaction = transaction;
        this.isProcessing = true;
        this.payForm.controls['target'].setValue('');
        this.payForm.controls['amount'].setValue('');
        this.accountService.getMe();
        this.transactionService.getLatest();
      }
    );

    this.accountService.getMe();
  }

  public pay(f: NgForm): boolean {
    if (f.valid) {
      this.accountService.transfer(f.value.target, f.value.amount);
    }
    return false;
  }

  validateTarget(targetControlValue): void {
    this.accountService.getByAccountNr(targetControlValue);
    if (targetControlValue.length > 2) {
      this.targetBankAccountHasMinLength = true;
    } else {
      this.targetBankAccountHasMinLength = false;
    }
  }
}
