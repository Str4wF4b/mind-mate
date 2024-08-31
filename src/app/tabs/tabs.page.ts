import { Component } from '@angular/core';
import { AnimationController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  selectedTab: any;

  constructor(private animationCtrl: AnimationController, private menuController: MenuController) { }

  /**
   * 
   */
  ngOnInit() {

  }

  /**
   * Sets the selected tab as the current event tab
   * and creates an animation for this tab
   * 
   * @param event The current tab
   */
  setCurrentTab(event: any) {
    this.selectedTab = event.tab;
    this.menuController.close('home-menu'); //close menu on previous tab

    // Create tab animation bouncing effect:
    const tabButton = document.querySelector(`ion-tab-button[tab="${this.selectedTab}"]`); // set current tabButton to selectedTab
    const fadeInAnimation = this.fadeInAnimation(tabButton as HTMLElement); // set animated element as tabButton
    fadeInAnimation.keyframes([
      { offset: 0, transform: 'scale(1)' },
      { offset: 0.5, transform: 'scale(1.05)' },
      { offset: 1, transform: 'scale(1) '}
    ]);
    fadeInAnimation.play();
  }

  /**
   * Creates a bouncing animation when changing tabs
   * 
   * @param baseEl The HTML element that is animated
   * @returns AnimationController with animation of the tabButtons
   */
  private fadeInAnimation(baseEl: HTMLElement) {
    console.log("hi");
    return this.animationCtrl.create()
      .addElement(baseEl)
      .duration(300)
      .easing('ease-in-out');
  }

}
