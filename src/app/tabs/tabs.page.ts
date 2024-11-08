import { Component } from '@angular/core';
import { AnimationController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  selectedTab: any; // the currently selected tab

  /**
   * Constructor for TabsPage.
   * Initializes the page with necessary controllers for animation and menu.
   * 
   * @param animationCtrl The controller to manage animations.
   * @param menuController The controller for managing the side menu.
   */
  constructor(
    private animationCtrl: AnimationController,
    private menuController: MenuController) {
  }

  ngOnInit() { }

  /**
   * Sets the currently selected tab and triggers a tab animation when switching.
   * It also closes the menu if it was previously open.
   * 
   * @param event The event that contains the information about the current tab being selected.
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
      { offset: 1, transform: 'scale(1) ' }
    ]);
    fadeInAnimation.play();
  }

  /**
   * Creates a fade-in animation effect for the tab button when switching tabs.
   * This function is responsible for defining the animation and its properties.
   * 
   * @param baseEl The HTML element (tab button) to animate.
   * @returns The AnimationController instance that will manage the animation.
   */
  private fadeInAnimation(baseEl: HTMLElement) {
    console.log("hi");
    return this.animationCtrl.create()
      .addElement(baseEl)
      .duration(300)
      .easing('ease-in-out');
  }
}
