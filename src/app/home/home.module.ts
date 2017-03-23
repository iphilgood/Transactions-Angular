import {NgModule, ModuleWithProviders} from '@angular/core';

import {SharedModule} from '../shared/shared.module';

import {HomeComponent, NewPaymentComponent, LatestTransactionsComponent } from './components/';
import { AuthModule } from '../auth/auth.module';
import { HomeRoutingModule } from './home-routing.module';
import { BankAccountValidatorDirective } from './directives/bankaccount-validator.directive';

@NgModule({
  declarations: [
    HomeComponent,
    NewPaymentComponent,
    LatestTransactionsComponent,
    BankAccountValidatorDirective
  ],
  imports: [
    HomeRoutingModule, SharedModule, AuthModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [ ]
})
export class HomeModule {
}
