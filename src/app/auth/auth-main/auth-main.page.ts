import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
//import { IonContent, IonItem, IonCard, IonText, IonInput, IonButton, IonIcon,IonLabel, IonList, IonSegment, IonSegmentButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-auth-main',
  templateUrl: './auth-main.page.html',
  styleUrls: ['./auth-main.page.scss'],
  //standalone: true,
  //imports: [ReactiveFormsModule]
})
export class AuthMainPage implements OnInit {
  segmentValue = '1'; // starting segment value

  constructor() {
  }

/**
 * Lifecycle hook that is called after the component has been initialized.
 * Ensures that `segmentValue` is set to '1' when the component loads.
 */
  ngOnInit() {
    this.segmentValue = '1';
  }

  /**
   * Handles the event when the segment value changes.
   * Updates the `segmentValue` property based on the event's detail.
   * 
   * @param event - The event object containing details about the segment change.
   */
  segmentChanged(event: any) {
    this.segmentValue = event.detail.value;
  }
}
