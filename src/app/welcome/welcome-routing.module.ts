import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent, RegisterComponent} from '../auth/components';
import {WelcomeComponent} from './components/';

const appRoutes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
    children: [
      { path: 'register', component: RegisterComponent },
      { path: '', component: LoginComponent }
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
export class WelcomeRoutingModule {}
