import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import { TitleComponent } from 'src/app/shared/elements/title/title.component';
import { ProgressIndeterminateModule } from 'src/app/shared/elements/progress-indeterminate/progress-indeterminate.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    ProgressIndeterminateModule
  ],
  declarations: [SearchPage, TitleComponent]
})
export class SearchPageModule {}
