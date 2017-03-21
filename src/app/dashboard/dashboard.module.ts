import {NgModule, ModuleWithProviders} from '@angular/core';

import {SharedModule} from '../shared/shared.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    DashboardRoutingModule, SharedModule
  ],
  exports: [
    DashboardComponent
  ],
  providers: [ ]
})
export class DashboardModule {
  static forRoot(config?: {}): ModuleWithProviders {
    return {
      ngModule: DashboardModule,
      providers: [ ]
    };
  }

}
