import {NgModule, ModuleWithProviders} from '@angular/core';

import {SharedModule} from '../shared/shared.module';

import {TransactionsRoutingModule} from './transactions-routing.module';
import {TransactionsComponent} from './components/';
import {AuthModule} from '../auth/auth.module';

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
  providers: [ ]
})
export class TransactionsModule {
  static forRoot(config?: {}): ModuleWithProviders {
    return {
      ngModule: TransactionsModule,
      providers: [ ]
    };
  }

}
