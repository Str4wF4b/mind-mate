import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { TimePickerComponent } from '../time-picker/time-picker.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  notificationsEnabled: boolean = false; // flag indicating whether notifications are enabled
  dailyEnabled: boolean = false; // flag indicating whether daily notifications are enabled
  weeklyEnabled: boolean = false; // flag indicating whether weekly notifications are enabled
  customEnabled: boolean = false; // flag indicating whether custom notifications are enabled
  dailyTime: string = ''; // the time set for daily notifications
  weeklyDay: string = ''; // the day set for weekly notifications
  weeklyTime: string = ''; // the time set for weekly notifications
  customDay: string = ''; // the day set for custom notifications
  customTime: string = ''; // the time set for custom notifications
  openItem: string = ''; // holds the type of item currently being edited or opened

  /**
   * Constructor for `SettingsComponent`.
   * Injects the necessary services to handle navigation and modal control.
   *
   * @param navCtrl - The NavController for navigation between pages
   * @param modalController - The ModalController to present and dismiss modals
   */
  constructor(
    private navCtrl: NavController,
    private modalController: ModalController) { }

  /**
   * Placeholder method for navigating to the background settings page.
   * Currently not implemented.
   */
  openBackgroundSettings() {
    //this.navCtrl.navigateForward('/background-settings'); // Navigate to background settings page
  }

  /**
   * Closes the modal when called.
   */
  close() {
    this.modalController.dismiss();
  }

  /**
   * Opens a modal to select a time for the notification (daily, weekly, or custom).
   * Passes the necessary data (type, day, and time) to the modal.
   *
   * @param type - The type of notification ('daily', 'weekly', or 'custom')
   * @returns Promise that resolves when the modal is presented
   */
  async openTimePicker(type: string) {
    const modal = await this.modalController.create({
      component: TimePickerComponent,
      componentProps: {
        type,  // 'daily', 'weekly', or 'custom'
        selectedDay: this.getDay(type),
        selectedTime: this.getTime(type),
      },
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        this.setNotificationData(type, result.data.selectedDay, result.data.selectedTime);
      }
    });
    return await modal.present();
  }

  /**
   * Returns the day set for the given notification type.
   *
   * @param type - The type of notification ('daily', 'weekly', or 'custom')
   * @returns The selected day for the given notification type
   */
  getDay(type: string): string {
    if (type === 'weekly') {
      return this.weeklyDay;
    } else if (type === 'custom') {
      return this.customDay;
    }
    return '';
  }

  /**
   * Returns the time set for the given notification type.
   *
   * @param type - The type of notification ('daily', 'weekly', or 'custom')
   * @returns The selected time for the given notification type
   */
  getTime(type: string): string {
    if (type === 'daily') {
      return this.dailyTime;
    } else if (type === 'weekly') {
      return this.weeklyTime;
    } else if (type === 'custom') {
      return this.customTime;
    }
    return '';
  }

  /**
   * Sets the selected day and time for a specific notification type.
   *
   * @param type - The type of notification ('daily', 'weekly', or 'custom')
   * @param day - The day to set
   * @param time - The time to set
   */
  setNotificationData(type: string, day: string, time: string) {
    if (type === 'daily') {
      this.dailyTime = time;
    } else if (type === 'weekly') {
      this.weeklyDay = day;
      this.weeklyTime = time;
    } else if (type === 'custom') {
      this.customDay = day;
      this.customTime = time;
    }
  }

  /**
   * Placeholder function for saving notification settings.
   * The logic for saving notification data is to be implemented.
   *
   * @param notificationType - The type of notification ('daily', 'weekly', or 'custom')
   */
  saveNotification(notificationType: string) {
    if (notificationType == 'daily') {

    } else if (notificationType == 'weekly') {

    } else if (notificationType == 'custom') {

    }

    this.openItem = ''; // close after saving by not selecting any time
  }

  /**
   * Prevents the toggle click event from propagating to other elements.
   * Used to handle the toggle behavior correctly.
   *
   * @param event - The event triggered by clicking the toggle
   */
  toggleClick(event: Event) {
    event.stopPropagation(); // prevent item event when clicking toggle
  }
}
