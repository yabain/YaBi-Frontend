import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProgressIndeterminateModule } from './shared/elements/progress-indeterminate/progress-indeterminate.module'
import { BilletModule } from './shared/elements/billet/billet.module';
import { RetraitModule } from './shared/elements/retrait/retrait.module';
import { RechargeModule } from './shared/elements/recharge/recharge.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ProgressIndeterminateModule,
    BilletModule,
    RetraitModule,
    RechargeModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
