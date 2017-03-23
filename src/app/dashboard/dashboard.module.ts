import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard.component';
import { AuthModule } from '../auth/auth.module';
import { TransactionsModule } from '../transactions/transactions.module';
import { HomeModule } from '../home/home.module';
import { AccountResourceService } from './resources/account-resource.service';
import { AccountService } from './services/account.service';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    DashboardRoutingModule, AuthModule, TransactionsModule, HomeModule, SharedModule
  ],
  exports: [
    DashboardComponent
  ],
  providers: [
    AccountService, AccountResourceService
  ]
})
export class DashboardModule { }
