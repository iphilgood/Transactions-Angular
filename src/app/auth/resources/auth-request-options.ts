import {Injectable} from '@angular/core';
import {RequestOptions, Headers} from "@angular/http";

import {SecurityTokenStore} from "../services/credential-management";

@Injectable()
export class AuthRequestOptions extends RequestOptions {

  constructor(
    private tokenStore: SecurityTokenStore,
    args? : any) {
    super(args);

    if (this.tokenStore.storedValue) {
      if (!this.headers) {
        this.headers = new Headers();
      }
      this.headers.set('Authorization', `Bearer ${this.tokenStore.storedValue.token}`);
    }
  }

  public merge(options?:any):RequestOptions {
    return new AuthRequestOptions(this.tokenStore, super.merge(options));
  }

  public static createFromTokenStore(tokenStore: SecurityTokenStore){
    return new AuthRequestOptions(tokenStore);
  }
}
