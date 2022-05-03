import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvitationsPageRoutingModule } from './invitations-routing.module';

import { InvitationsPage } from './invitations.page';
import { TitleComponent } from '../shared/title/title.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvitationsPageRoutingModule
  ],
  declarations: [InvitationsPage, TitleComponent]
})
export class InvitationsPageModule {}
