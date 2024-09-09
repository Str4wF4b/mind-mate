import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
})
export class TimePickerComponent  implements OnInit {
  @Input() type: string = '';  // daily, weekly or custom
  @Input() selectedDay: string = '';
  @Input() selectedTime: string = '';

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
      
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  confirmSelection() {
    this.modalCtrl.dismiss({
      selectedDay: this.selectedDay,
      selectedTime: this.selectedTime,
    });
  }

}
