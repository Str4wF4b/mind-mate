import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal, MenuController } from '@ionic/angular';
import { UserDataService } from 'src/app/services/user-data.service';
import { LayoutManager } from 'src/app/utils/layout-manager';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  layoutManager: LayoutManager; // manages layout settings and configurations
  username!: string; // stores the current username
  @ViewChild('edit_profile') editProfileModal!: IonModal; // reference to the edit profile modal
  @ViewChild('settings') settingsModal!: IonModal; // reference to the settings modal

  /**
   * Constructor for `SideMenuComponent`.
   * Injects the necessary services for controlling the menu, routing, and handling user data.
   *
   * @param menuController - The MenuController to control the side menu behavior
   * @param router - The Router to navigate between views
   * @param userDataService - Service to manage user data, including login and username
   */
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

  /**
   * Lifecycle hook that is called after the view has been initialized.
   * Registers an event listener to adjust the menu size when it opens.
   */
  ngAfterViewInit() {
    this.menuController.get('side-menu').then(menu => {
      if (menu) {
        menu.addEventListener('ionMenuDidOpen', () => this.adjustMenuSize());
      }
    });
  }

  /**
   * Adjusts the size of the side menu (currently not implemented).
   */
  adjustMenuSize() { }

  /**
   * Opens the settings modal when called.
   */
  openSettingsModal() {
    this.settingsModal.present();
  }

  /**
   * Opens the edit profile modal when called.
   */
  openProfileModal() {
    this.editProfileModal.present();
  }

  /**
   * Logs the user out by closing the side menu and navigating to the authentication screen.
   * Also clears the user session.
   */
  async logout() {
    await this.menuController.close('side-menu');
    this.userDataService.logout();
    this.router.navigate(['/auth-main']);
  }
}
