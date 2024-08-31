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
  segmentValue = '1';

  constructor() {
  }

  ngOnInit() {
  }

  segmentChanged(event: any) {
    this.segmentValue = event.detail.value;
  }

}
