import {Injectable} from '@angular/core';
import {Response, Http} from '@angular/http';

import {Observable} from 'rxjs';

import {Transaction} from '../models';
import { ResourceBase } from '../../shared/resource-base';
import { SecurityTokenStore } from "../../auth";

@Injectable()
export class TransactionResourceService extends ResourceBase {
  constructor(http: Http, private tokenStore: SecurityTokenStore) {
    super(http);
  }

  public getBetween(from: Date, to: Date): Observable<Transaction[]> {
    let options = ResourceBase.JSON_HEADERS;
    options.headers.append('Authorization', `Bearer ${this.tokenStore.storedValue.token}`);
    return this.get(`/accounts/transactions?fromDate=${from}&toDate=${to}`, options)
      .map((response: Response) => {
        const result = response.json().result
        if (result) {
          return result.map(transaction => Transaction.fromDto(transaction));
        }
        return null;
      })
      .catch((error: any) => {
        return Observable.of<Transaction[]>([]);
      });
  }  
}
