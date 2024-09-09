import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal, MenuController } from '@ionic/angular';
import { UserDataService } from 'src/app/services/user-data.service';
import { LayoutManager } from 'src/app/utils/layout-manager.';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  layoutManager: LayoutManager;
  @ViewChild('edit_profile') editProfileModal!: IonModal;
  @ViewChild('settings') settingsModal!: IonModal;
  username!: string;
  


  constructor(
    private menuController: MenuController,
    private router: Router,
    private userDataService: UserDataService) {
      this.layoutManager = new LayoutManager();
      this.userDataService.usernameStorage$.subscribe((name) => {
        this.username = name;
      });
    }

  ngOnInit() {
   }

   ngAfterViewInit() {
    this.menuController.get('side-menu').then(menu => {
      if (menu) {
        menu.addEventListener('ionMenuDidOpen', () => this.adjustMenuSize());
      }
    });
  }

  adjustMenuSize() {}

  openSettingsModal() {
    this.settingsModal.present();
  }

  openProfileModal() {
    this.editProfileModal.present();
  }

  async logout() {
    await this.menuController.close('side-menu');
    this.userDataService.logout();
    this.router.navigate(['/auth-main']);
  }

}
