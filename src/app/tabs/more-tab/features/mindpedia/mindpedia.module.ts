import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MindpediaPageRoutingModule } from './mindpedia-routing.module';

import { MindpediaPage } from './mindpedia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MindpediaPageRoutingModule
  ],
  declarations: [MindpediaPage]
})
export class MindpediaPageModule {}
