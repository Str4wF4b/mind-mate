import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WellBeingTabPageRoutingModule } from './well-being-tab-routing.module';
import { WellBeingTabPage } from './well-being-tab.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WellBeingTabPageRoutingModule,
    SharedModule
  ],
  declarations: [WellBeingTabPage]
})
export class WellBeingTabPageModule {}
