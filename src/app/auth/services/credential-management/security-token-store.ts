import {Injectable} from '@angular/core';

@Injectable()
export class SecurityTokenStore {
  private token: SecurityToken;

  constructor() {
  }

  public get storedValue(): SecurityToken {
    let token = localStorage.getItem('token');
    return JSON.parse(token);
  }

  public set storedValue(value: SecurityToken) {
    localStorage.setItem('token', JSON.stringify(value));
  }
}

export interface SecurityToken {
  token: string;
  owner: any;
}
