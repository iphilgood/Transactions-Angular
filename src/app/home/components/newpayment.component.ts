import { Component, OnInit, AfterViewChecked, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth/index';
import { BankAccount } from '../../dashboard/models';
import { AccountService } from '../../dashboard/services';

@Component({
  selector: 'wed-newpayment',
  templateUrl: 'newpayment.component.html',
  styleUrls: ['newpayment.component.scss']
})
export class NewPaymentComponent implements OnInit, AfterViewChecked {

  bankAccount: BankAccount;
  isProcessing = false;
  payForm: NgForm;
  @ViewChild('payForm') currentForm: NgForm;

  formErrors = {
    'target': ''
  };

  validationMessages = {
    'target': {
      'required':            'Please specify the target account number.',
      'validBankAccount':    'Firstname Lastname',
      'unknownBankAccount':  'Unknown account number specified.',
      'forbiddenName':       'Boby is not allowed.'
    }
  };

  constructor(private accountService: AccountService) { }

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

  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    if (this.currentForm === this.payForm) { return; }
    this.payForm = this.currentForm;
    if (this.payForm) {
      this.payForm.valueChanges.subscribe(data => this.onValueChanged(data));
    }
  }

  onValueChanged(data?: any) {
    if (!this.payForm) { return; }
    const form = this.payForm.form;

    // tslint:disable:forin
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
    // tslint:enable:forin
  }
}
