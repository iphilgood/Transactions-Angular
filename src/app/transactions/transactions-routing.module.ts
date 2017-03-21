import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent, RegisterComponent} from '../auth/components';
import {TransactionsComponent} from './components/';
import {AuthGuard} from '../auth/services/auth-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    component: TransactionsComponent,
    canActivate: [AuthGuard],
    children: [

    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes) // !forChild() important
  ],
  exports: [
    RouterModule
  ]
})
export class TransactionsRoutingModule {}
