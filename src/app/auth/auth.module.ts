import {NgModule, ModuleWithProviders} from '@angular/core';
import {RequestOptions} from '@angular/http';

import {AuthService, SecurityTokenStore} from './services';
import {AuthResourceService, AuthRequestOptions} from './resources';

import {LoginComponent, LogoutComponent, RegisterComponent} from './components';
import {SharedModule} from '../shared/shared.module';
import { EqualValidatorDirective } from '../shared/equal-validator.directive';
import { AuthGuard } from './services/auth-guard.service';

@NgModule({
  declarations: [
    LoginComponent, LogoutComponent, RegisterComponent, EqualValidatorDirective
  ],
  imports: [
    SharedModule
  ],
  exports: [
    LoginComponent, LogoutComponent, RegisterComponent
  ],
  providers: [

  ]
})
export class AuthModule {
  static forRoot(config?: {}): ModuleWithProviders {

    return {
      ngModule: AuthModule,
      providers: [
        AuthGuard,
        AuthResourceService,
        AuthService,
        SecurityTokenStore,
        {
          provide: RequestOptions,
          useFactory: AuthRequestOptions.createFromTokenStore,
          deps: [SecurityTokenStore]
        }]
    };
  }
}
