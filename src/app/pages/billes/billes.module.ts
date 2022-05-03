import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillesPageRoutingModule } from './billes-routing.module';

import { BillesPage } from './billes.page';
import { TitleComponent } from '../shared/title/title.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillesPageRoutingModule
  ],
  declarations: [BillesPage, TitleComponent]
})
export class BillesPageModule {}
