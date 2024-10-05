import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SexualDysfunctionsParaphiliasPageRoutingModule } from './sexual-dysfunctions-paraphilias-routing.module';

import { SexualDysfunctionsParaphiliasPage } from './sexual-dysfunctions-paraphilias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SexualDysfunctionsParaphiliasPageRoutingModule
  ],
  declarations: [SexualDysfunctionsParaphiliasPage]
})
export class SexualDysfunctionsParaphiliasPageModule {}
