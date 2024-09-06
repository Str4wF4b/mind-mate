import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchSpecialistsPageRoutingModule } from './search-specialists-routing.module';

import { SearchSpecialistsPage } from './search-specialists.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchSpecialistsPageRoutingModule,
    SharedModule
  ],
  declarations: [SearchSpecialistsPage]
})
export class SearchSpecialistsPageModule {}
