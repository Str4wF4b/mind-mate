import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
})
export class TimePickerComponent implements OnInit {
  @Input() type: string = '';  // type of time selection (e.g., daily, weekly, or custom)
  @Input() selectedDay: string = ''; // selected day for the time picker
  @Input() selectedTime: string = ''; // selected time for the time picker

  /**
   * Constructor for the TimePickerComponent.
   * Initializes the component with ModalController.
   * 
   * @param modalCtrl The modal controller used to manage modals in this component.
   */
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  /**
   * Closes the modal without returning any data.
   */
  closeModal() {
    this.modalCtrl.dismiss();
  }

  /**
   * Confirms the selected day and time, and dismisses the modal,
   * passing the selected day and time as data.
   */
  confirmSelection() {
    this.modalCtrl.dismiss({
      selectedDay: this.selectedDay,
      selectedTime: this.selectedTime,
    });
  }
}
