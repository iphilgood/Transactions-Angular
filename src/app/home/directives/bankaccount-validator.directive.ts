import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[validateBankAccount][formControlName],[validateBankAccount][formControl],[validateBankAccount][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => BankAccountValidator), multi: true }
    ]
})
export class BankAccountValidator implements Validator {
    constructor(@Attribute('validateBankAccount') public validateBankAccount: string) {
    }

    validate(c: AbstractControl): { [key: string]: any } {

    }
}
