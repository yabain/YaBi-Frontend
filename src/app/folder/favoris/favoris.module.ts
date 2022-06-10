import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavorisPageRoutingModule } from './favoris-routing.module';

import { FavorisPage } from './favoris.page';
import { TitleComponent } from '../../shared/elements/title/title.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavorisPageRoutingModule
  ],
  declarations: [FavorisPage, TitleComponent]
})
export class FavorisPageModule {}
