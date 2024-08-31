import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';;
import { IonicModule } from '@ionic/angular';
import { QuestionnaireTabPageRoutingModule } from './questionnaire-tab-routing.module';
import { QuestionnaireTabPage } from './questionnaire-tab.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionnaireTabPageRoutingModule,
    SharedModule
  ],
  declarations: [QuestionnaireTabPage]
})
export class QuestionnaireTabPageModule {}
