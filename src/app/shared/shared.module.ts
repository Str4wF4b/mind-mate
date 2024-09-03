import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SideMenuComponent } from '../components/side-menu/side-menu.component';
import { EditProfileComponent } from '../components/edit-profile/edit-profile.component';
import { FormsModule } from '@angular/forms';
import { Camera } from '@awesome-cordova-plugins/camera/ngx'



@NgModule({
  declarations: [SideMenuComponent, EditProfileComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  providers: [Camera],
  exports: [SideMenuComponent, EditProfileComponent]
})
export class SharedModule { }
