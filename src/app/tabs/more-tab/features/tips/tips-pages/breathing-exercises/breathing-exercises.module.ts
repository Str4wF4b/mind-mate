import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreathingExercisesPageRoutingModule } from './breathing-exercises-routing.module';

import { BreathingExercisesPage } from './breathing-exercises.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreathingExercisesPageRoutingModule
  ],
  declarations: [BreathingExercisesPage]
})
export class BreathingExercisesPageModule {}
