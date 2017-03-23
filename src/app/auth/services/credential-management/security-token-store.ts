import {Injectable} from '@angular/core';

@Injectable()
export class SecurityTokenStore {
  constructor() {
  }

  public get storedValue(): SecurityToken {
    let securityToken = localStorage.getItem('securityToken');
    return JSON.parse(securityToken);
  }

  public set storedValue(value: SecurityToken) {
    localStorage.setItem('securityToken', JSON.stringify(value));
  }
}

export interface SecurityToken {
  token: string;
  owner: any;
}
