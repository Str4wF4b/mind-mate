import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  @Input() username!: string;

  constructor(
    private modalController: ModalController,
    private userDataService: UserDataService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    console.log('Username Modal: ', this.username);
  }

  async saveChanges() {
    this.userDataService.setUsername(this.username);

    const usernameToast = await this.toastController.create({
      message: 'Username saved successfully!',
      duration: 2000,
      color: 'success'
    });
    await usernameToast.present();
  }

  close() {
    this.modalController.dismiss();
  }

  public actionSheetButtons = [
    {
      text: 'Save Changes',
      role: 'destructive',
      handler: () => this.saveChanges(),
      /* data: {
        action: 'delete',
      }, */
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];
}
