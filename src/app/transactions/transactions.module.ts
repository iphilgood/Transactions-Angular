import {NgModule, ModuleWithProviders} from '@angular/core';

import {SharedModule} from '../shared/shared.module';

import {TransactionsRoutingModule} from './transactions-routing.module';
import {TransactionsComponent} from './components/';
import { AuthModule } from '../auth/auth.module';
import { TransactionService } from "./services";
import { TransactionResourceService } from "./resources/transaction-resource.service";

@NgModule({
  declarations: [
    TransactionsComponent
  ],
  imports: [
    TransactionsRoutingModule, SharedModule, AuthModule
  ],
  exports: [
    TransactionsComponent
  ],
  providers: [ 
    TransactionResourceService, TransactionService
  ]
})
export class TransactionsModule { }
