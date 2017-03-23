import {NgModule, ModuleWithProviders} from '@angular/core';

import {SharedModule} from '../shared/shared.module';

import {HomeComponent} from './components/';
import { AuthModule } from '../auth/auth.module';
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
  declarations: [
    HomeComponent
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
  static forRoot(config?: {}): ModuleWithProviders {
    return {
      ngModule: HomeModule,
      providers: [ ]
    };
  }

}
