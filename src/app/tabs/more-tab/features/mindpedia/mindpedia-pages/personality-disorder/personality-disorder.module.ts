import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalityDisorderPageRoutingModule } from './personality-disorder-routing.module';

import { PersonalityDisorderPage } from './personality-disorder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalityDisorderPageRoutingModule
  ],
  declarations: [PersonalityDisorderPage]
})
export class PersonalityDisorderPageModule {}
