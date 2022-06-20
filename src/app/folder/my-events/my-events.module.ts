import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyEventsRoutingModule } from './my-events-routing.module';

import { MyEventsPage } from './my-events.page';
import { TitleComponent } from '../../shared/elements/title/title.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyEventsRoutingModule
  ],
  declarations: [MyEventsPage, TitleComponent]
})
export class MyEventsModule {}
