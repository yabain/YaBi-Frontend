import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventDetailRoutingModule } from './event-detail-routing.module';

import { EventDetailPage } from './event-detail.page';
import { TitleComponent } from '../../title/title.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventDetailRoutingModule
  ],
  declarations: [EventDetailPage, TitleComponent]
})
export class EventDetailModule {}
