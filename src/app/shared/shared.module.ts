import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SideMenuComponent } from '../components/side-menu/side-menu.component';
import { EditProfileComponent } from '../components/edit-profile/edit-profile.component';
import { FormsModule } from '@angular/forms';
import { Camera } from '@awesome-cordova-plugins/camera/ngx'
import { SpecialistsInfoComponent } from '../components/specialists-info/specialists-info.component';
import { SettingsComponent } from '../components/settings/settings.component';
import { TimePickerComponent } from '../components/time-picker/time-picker.component';



@NgModule({
  declarations: [
    SideMenuComponent,
    EditProfileComponent,
    SpecialistsInfoComponent,
    SettingsComponent,
    TimePickerComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  providers: [Camera],
  exports: [
    SideMenuComponent,
    EditProfileComponent,
    SpecialistsInfoComponent,
    SettingsComponent,
    TimePickerComponent]
})
export class SharedModule { }
