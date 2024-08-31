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

  constructor(
    private navCtrl: NavController, 
    /* private router: Router, */
    private usernameService: UserDataService
  ) {
    this.usernameService.username$.subscribe(name => {
      this.username = name;
    })
  }

  ngOnInit() {
    console.log('EditProfileComponent loaded');
  }

  /**
   * 
   * @param tab 
   */
  switchTab(tab: string) {
    this.navCtrl.navigateRoot(`/tabs/${tab}`);
  }


}
