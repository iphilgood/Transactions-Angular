import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components';
import { AuthGuard } from '../auth/services/auth-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
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
export class HomeRoutingModule {}
