import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-tab',
  templateUrl: './more-tab.page.html',
  styleUrls: ['./more-tab.page.scss'],
})
export class MoreTabPage implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }

  //openFeature(page: string) {
  //  this.navCtrl.navigateRoot(`/more-tab/${page}`);
  //}

  //openOthers(page: string) {
  //  this.navCtrl.navigateRoot(`/more-tab/${page}`);
  //}
}
