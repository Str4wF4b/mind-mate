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
  @Input() username: string = ''; // the current username input from the parent component
  @Input() email!: string; // the current email input from the parent component
  @Input() password!: string; // the current password input from the parent component
  usernamePlaceholder: string = ''; // placeholder for the username in the form
  emailPlaceholder: string = ''; // placeholder for the email in the form
  newUsername: string = ''; // holds new username input by the user
  newEmail: string = ''; // holds new email input by the user
  newPassword: string = ''; // holds new password input by the user
  passwordError: boolean = false; // flag indicating if the password length is insufficient
  form!: FormGroup; // the form used for editing the profile
  isPwd: boolean = false; // flag indicating password visibility
  profileImage: string | null | undefined = null; // the currently selected profile image
  currentProfileImage: string | null | undefined = null; // the original profile image to compare changes
  resetProfileImage: boolean = false; // flag indicating if the profile image has been reset
  isChanged: boolean = false; // flag to track active changes

  @ViewChild('fileInput') fileInput: any; // reference to the file input element for profile image upload

  /**
   * Constructor for `EditProfileComponent`.
   * Injects the necessary services for handling modals, user data management, toast notifications, and action sheets.
   *
   * @param modalController - Service to manage modal dialogs.
   * @param userDataService - Service to handle user data storage and retrieval.
   * @param toastController - Service to display toast notifications.
   * @param actionSheetController - Service to create and present action sheets.
   */
  constructor(
    private modalController: ModalController,
    private userDataService: UserDataService,
    private toastController: ToastController,
    private actionSheetController: ActionSheetController
  ) { }

  /**
   * Lifecycle hook that runs when the component is initialized.
   * Sets up initial data for profile image, username, and email placeholders.
   */
  ngOnInit() {
    this.profileImage = this.userDataService.getProfileImage();
    this.currentProfileImage = this.profileImage; // save current profile image
    this.usernamePlaceholder = this.userDataService.getUsername();
    this.emailPlaceholder = this.userDataService.getEmail(); // get current email user has logged in or signed up with
  }

  /**
   * Presents an action sheet allowing the user to choose the source of the profile image,
   * or to remove the current profile image.
   */
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
            this.userDataService.setProfileImage(this.profileImage);
          }
        }
      ]
    });
    await actionSheet.present();
  }

  /**
   * Captures a photo from the specified source (camera or photo library),
   * updates the profile image, and checks if changes have been made.
   *
   * @param source - The source from which to capture the photo (e.g., Camera or Photos).
   */
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
    } catch (error: any) {
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
   * Checks if the new password length meets the minimum requirement.
   * Sets `passwordError` to `true` if the length is less than 8 characters.
   */
  checkPasswordLength() {
    this.passwordError = this.newPassword.length < 8;
  }

  /**
   * Saves changes made by the user, updates placeholders, and displays toast notifications for feedback.
   * Checks if any modifications have been made before saving.
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
   * Closes the modal dialog when called.
   */
  close() {
    this.modalController.dismiss();
  }


  /**
   * Array of action sheet buttons used to present options for saving or canceling profile edits.
   */
  public actionSheetButtons = [
    {
      text: 'Save Changes',
      icon: 'save',
      role: 'destructive',
      handler: () => this.saveChanges(),
      /* data: {
        action: 'delete',
      }, */
    },
    {
      text: 'Cancel',
      icon: 'close-circle',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  /**
   * Toggles the visibility of the password field.
   */
  togglePwd() {
    this.isPwd = !this.isPwd; // toggle password visibility
  }
}