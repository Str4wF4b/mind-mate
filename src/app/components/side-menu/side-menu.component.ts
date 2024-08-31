import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  constructor(private menuController: MenuController, private router: Router) { }

  ngOnInit() { }

  async logout() {
    await this.menuController.close('side-menu');
    this.router.navigate(['/auth-main']);
  }

}
