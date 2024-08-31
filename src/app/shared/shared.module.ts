import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SideMenuComponent } from '../components/side-menu/side-menu.component';
import { EditProfileComponent } from '../components/edit-profile/edit-profile.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SideMenuComponent, EditProfileComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [SideMenuComponent, EditProfileComponent]
})
export class SharedModule { }
