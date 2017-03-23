import {Injectable} from '@angular/core';
import {Response, Http} from '@angular/http';

import {Observable} from 'rxjs';

import {BankAccount} from '../models';
import { ResourceBase } from '../../shared/resource-base';
import { SecurityTokenStore } from '../../auth';
import { Transaction } from '../../transactions/models';

@Injectable()
export class AccountResourceService extends ResourceBase {
  constructor(http: Http, private tokenStore: SecurityTokenStore) {
    super(http);
  }

  public getMe(): Observable<BankAccount> {
    const options = ResourceBase.JSON_HEADERS;
    options.headers.append('Authorization', `Bearer ${this.tokenStore.storedValue.token}`);
    return this.get(`/accounts/`, options)
      .map((response: Response) => {
        const result = response.json();
        if (result) {
          return BankAccount.fromDto(result);
        }
        return null;
      })
      .catch((error: any) => {
        return Observable.of<BankAccount>(null);
      });
  }

  public getByAccountNr(accountNr: number): Observable<BankAccount> {
    const options = ResourceBase.JSON_HEADERS;
    options.headers.append('Authorization', `Bearer ${this.tokenStore.storedValue.token}`);
    return this.get(`/accounts/${accountNr}`, options)
      .map((response: Response) => {
        const result = response.json();
        if (result) {
          return BankAccount.fromDto(result);
        }
        return null;
      })
      .catch((error: any) => {
        return Observable.of<BankAccount>(null);
      });
  }

  public transfer(target: string, amount: number): Observable<Transaction> {
    const options = ResourceBase.JSON_HEADERS;
    options.headers.append('Authorization', `Bearer ${this.tokenStore.storedValue.token}`);
    options.body = JSON.stringify({ target, amount });
    return this.post('/accounts/transactions', options)
      .map((response: Response) => {
        const result = response.json();
        if (result) {
          return Transaction.fromDto(result);
        }
        return null;
      })
      .catch((error: any) => {
        return Observable.of<Transaction>(null);
      });
  }
}
