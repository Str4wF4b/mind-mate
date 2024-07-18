import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.page.html',
  styleUrls: ['./home-tab.page.scss'],
})
export class HomeTabPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  /**
   * 
   * @param tab 
   */
  switchTab(tab: string) {
    this.navCtrl.navigateRoot(`/tabs/${tab}`);
  }

}
