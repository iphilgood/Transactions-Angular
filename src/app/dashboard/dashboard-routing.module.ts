import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard.component';
import { TransactionsComponent } from '../transactions/index';

import { AuthGuard } from '../auth/services/auth-guard.service';
import { HomeComponent } from '../home/components/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'transactions', component: TransactionsComponent },
      { path: '', component: HomeComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {}
