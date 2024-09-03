import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.page.html',
  styleUrls: ['./home-tab.page.scss'],
})
export class HomeTabPage implements OnInit {
  username!: string;
  profileImage: string | null | undefined = null;


  constructor(
    private navCtrl: NavController,
    /* private router: Router, */
    private userDataService: UserDataService
  ) {
    this.userDataService.username$.subscribe(name => {
      this.username = name;
    })
  }

  ngOnInit() {
    //this.profileImage = localStorage.getItem('profileImage');
    this.userDataService.profileStorageImage$.subscribe((image) => {
      this.profileImage = image;
    })
  }

  /**
   * 
   * @param tab 
   */
  switchTab(tab: string) {
    this.navCtrl.navigateRoot(`/tabs/${tab}`);
  }


}
