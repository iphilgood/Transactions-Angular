import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./auth/services/auth-guard.service";

const appRoutes: Routes = [

  {
    path: 'dashboard',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
    canLoad: [AuthGuard]
  },

  {
    path: 'transactions',
    loadChildren: 'app/transactions/transactions.module#TransactionsModule',
    canLoad: [AuthGuard]
  },

  { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
