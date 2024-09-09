import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { TimePickerComponent } from '../time-picker/time-picker.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  notificationsEnabled: boolean = false;
  dailyEnabled: boolean = false;
  weeklyEnabled: boolean = false;
  customEnabled: boolean = false;
  dailyTime: string = '';
  weeklyDay: string = '';
  weeklyTime: string = '';
  customDay: string = '';
  customTime: string = '';
  openItem: string = '';

  constructor(
    private navCtrl: NavController,
    private modalController: ModalController) { }

  openBackgroundSettings() {
    //this.navCtrl.navigateForward('/background-settings'); // Navigate to background settings page
  }

  close() {
    this.modalController.dismiss();
  }


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

  getDay(type: string): string {
    if (type === 'weekly') {
      return this.weeklyDay;
    } else if (type === 'custom') {
      return this.customDay;
    }
    return '';
  }

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

  saveNotification(notificationType: string) {
    if (notificationType == 'daily') {

    } else if (notificationType == 'weekly') {

    } else if (notificationType == 'custom') {

    }

    this.openItem = ''; // close after saving by not selecting any time
  }

  toggleClick(event: Event) {
    event.stopPropagation(); // prevent item event when clicking toggle
  }
}
