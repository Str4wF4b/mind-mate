import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UserDataService } from 'src/app/services/user-data.service';
import { LayoutManager } from 'src/app/utils/layout-manager.';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.page.html',
  styleUrls: ['./home-tab.page.scss'],
})
export class HomeTabPage implements OnInit {
  username!: string;
  profileImage: string | null | undefined = null;
  selectedUserFeeling: string = 'empty';


  constructor(
    private navCtrl: NavController,
    private userDataService: UserDataService
  ) {
    this.userDataService.usernameStorage$.subscribe((name) => {
      this.username = name;
    });
  }

  ngOnInit() {
    //this.profileImage = localStorage.getItem('profileImage');
    this.userDataService.profileStorageImage$.subscribe((image) => {
      this.profileImage = image;
    });
    this.userDataService.selectedFeeling$.subscribe((feeling) => {
      this.selectedUserFeeling = feeling;
    });
  }

  ngAfterViewInit() {
    new LayoutManager();
  }

  /**
   * 
   * @param tab 
   */
  switchTab(tab: string) {
    this.navCtrl.navigateRoot(`/tabs/${tab}`);
  }


}
