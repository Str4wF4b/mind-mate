import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActionSheetController, ModalController, ToastController } from '@ionic/angular';
import { UserDataService } from 'src/app/services/user-data.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Plugins } from '@capacitor/core';
const { Permissions } = Plugins;


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  @Input() username: string = '';
  @Input() email!: string;
  @Input() password!: string;
  usernamePlaceholder: string = '';
  emailPlaceholder: string = '';
  newUsername: string = '';
  newEmail: string = '';
  newPassword: string = '';
  passwordError: boolean = false;
  form!: FormGroup;
  isPwd: boolean = false;
  profileImage: string /* | ArrayBuffer */ | null | undefined = null;

  @ViewChild('fileInput') fileInput: any;

  constructor(
    private modalController: ModalController,
    private userDataService: UserDataService,
    private toastController: ToastController,
    private actionSheetController: ActionSheetController
  ) {
  }

  ngOnInit() {
    this.profileImage = this.userDataService.getProfileImage();
    this.usernamePlaceholder = this.userDataService.getUsername();
    this.emailPlaceholder = this.userDataService.getEmail(); // get current email user has logged in or signed up with
    console.log('Username Modal: ', this.username);
    console.log('Email Modal: ', this.emailPlaceholder);
  }

  async presentPhotoActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Image Source',
      buttons: [
        {
          text: 'Choose from Gallery',
          icon: 'image',
          handler: () => {
            this.takePhoto(CameraSource.Photos);
          }
        },
        {
          text: 'Take Photo',
          icon: 'camera',
          handler: () => {
            this.takePhoto(CameraSource.Camera);
          }
        }
      ]
    });
    await actionSheet.present();
  }

  async takePhoto(source: CameraSource) {
    try {
      const image = await Camera.getPhoto({
        quality: 80,
        resultType: CameraResultType.DataUrl,
        source: source,
      });

      this.profileImage = image.dataUrl;
      if (this.profileImage !== undefined) {
        this.userDataService.setProfileImage(this.profileImage);
      }
      //console.log('Profile Image URL:', this.profileImage);
    } catch (error: any) {
      //console.error('Camera issue:', error);
      if (error.message.includes('User cancelled photos app')) {
        const toast = await this.toastController.create({
          message: 'Photo selection cancelled.',
          duration: 2000,
          color: 'warning'
        });
        await toast.present();
      } else {
        console.error('Camera issue:', error);
      }
    }
  }

  /**
   * Checks if the new password is too short
   */
  checkPasswordLength() {
    this.passwordError = this.newPassword.length < 8;
  }

  /**
   * Handles saving of user changes and updates placeholders if fields are changed
   */
  async saveChanges() {
    let isChanged = false; // flag to track active changes

    // update profile image:
    if (this.profileImage) {
      this.userDataService.setProfileImage(this.profileImage);
      isChanged = true; // active changes
    }

    // update username placeholder on change:
    if (this.newUsername && this.newUsername.trim() !== '') {
      this.userDataService.setUsername(this.newUsername); // new input is new username
      this.usernamePlaceholder = this.newUsername; // update placeholder
      isChanged = true; // active changes
      console.log(this.newUsername);
      this.newUsername = ''; // reset new username
      console.log(this.userDataService.getUsername);
    }

    // update email placeholder on change:
    if (this.email !== '' && this.newEmail !== '' && this.newEmail.includes('@')) {
      this.userDataService.setEmail(this.newEmail); // new input is new email
      this.emailPlaceholder = this.newEmail; // update placeholder
      isChanged = true; // active changes
      this.newEmail = ''; // reset new email
    }

    // update password:
    if (this.password !== '' && this.newPassword.length > 7) {
      isChanged = true; // active changes
      this.newPassword = ''; // reset new password
    }

    if (isChanged) {
      const usernameToast = await this.toastController.create({
        message: 'Changes saved successfully!',
        duration: 2000,
        color: 'success'
      });
      await usernameToast.present();
    } else {
      const noChangesToast = await this.toastController.create({
        message: 'No changes to save.',
        duration: 2000,
        color: 'warning'
      });
      await noChangesToast.present();
    }
  }

  /**
   * 
   */
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

  togglePwd() {
    this.isPwd = !this.isPwd; // toggle password visibility
  }
}