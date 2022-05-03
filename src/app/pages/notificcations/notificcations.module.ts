import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificcationsPageRoutingModule } from './notificcations-routing.module';

import { NotificcationsPage } from './notificcations.page';
import { TitleComponent } from '../shared/title/title.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificcationsPageRoutingModule
  ],
  declarations: [NotificcationsPage, TitleComponent]
})
export class NotificcationsPageModule {}
