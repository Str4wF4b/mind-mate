import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchizophreniaPageRoutingModule } from './schizophrenia-routing.module';

import { SchizophreniaPage } from './schizophrenia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchizophreniaPageRoutingModule
  ],
  declarations: [SchizophreniaPage]
})
export class SchizophreniaPageModule {}
