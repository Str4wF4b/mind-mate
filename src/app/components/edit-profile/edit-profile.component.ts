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
  profileImage: string | null | undefined = null;
  currentProfileImage: string | null | undefined = null;
  resetProfileImage: boolean = false;
  isChanged: boolean = false; // flag to track active changes

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
    this.currentProfileImage = this.profileImage; // save current profile image
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
        },
        {
          text: 'Remove Image',
          icon: 'trash',
          handler: () => {
            this.resetProfileImage = true;
            this.profileImage = null;
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

      if (this.profileImage !== undefined && this.profileImage !== this.currentProfileImage) {
        this.userDataService.setProfileImage(this.profileImage);
        this.isChanged = true;
      }
      //console.log('Profile Image URL:', this.profileImage);
    } catch (error: any) {
      //console.error('Camera issue:', error);
      if (error.message.includes('User cancelled photos app')) {
        const toast = await this.toastController.create({
          message: 'Photo selection cancelled.',
          duration: 2000,
          color: 'undefined',
          cssClass: 'warning-toast'
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
    //let isChanged = false; // flag to track active changes

    // if (this.profileImage && this.profileImage !== this.currentProfileImage) {
    //   this.userDataService.setProfileImage(this.profileImage);
    //   this.isChanged = true;
    // }

    this.currentProfileImage = this.profileImage;

    // check if profile image is removed:
    if (this.resetProfileImage) {
      this.isChanged = true; // active changes
      this.resetProfileImage = false; // reset profile image removed
    }

    // update username placeholder on change:
    if (this.newUsername && this.newUsername.trim() !== '') {
      this.userDataService.setUsername(this.newUsername); // new input is new username
      this.usernamePlaceholder = this.newUsername; // update placeholder
      this.isChanged = true; // active changes
      console.log(this.newUsername);
      this.newUsername = ''; // reset new username
      console.log(this.userDataService.getUsername);
    }

    console.log('Here ' + this.newEmail.includes('@') + this.newEmail);

    // update email placeholder on change:
    if (this.email !== '' && this.newEmail !== '' && this.newEmail.includes('@')) {
      this.userDataService.setEmail(this.newEmail); // new input is new email
      this.emailPlaceholder = this.newEmail; // update placeholder
      this.isChanged = true; // active changes
      this.newEmail = ''; // reset new email
    }

    // update password:
    if (this.password !== '' && this.newPassword.length > 7) {
      this.isChanged = true; // active changes
      this.newPassword = ''; // reset new password
    }

    console.log(this.isChanged);

    if (this.isChanged) {
      const usernameToast = await this.toastController.create({
        message: 'Changes saved successfully!',
        duration: 2000,
        color: 'undefined',
        cssClass: 'success-toast'
      });
      await usernameToast.present();
    } else {
      const noChangesToast = await this.toastController.create({
        message: 'No changes to save.',
        duration: 2000,
        color: 'undefined',
        cssClass: 'warning-toast'
      });
      await noChangesToast.present();
    }

    this.isChanged = false;
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