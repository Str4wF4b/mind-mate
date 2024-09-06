import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-search-specialists',
  templateUrl: './search-specialists.page.html',
  styleUrls: ['./search-specialists.page.scss'],
})
export class SearchSpecialistsPage implements OnInit {
  @ViewChild('infoModal') infoModal!: IonModal;

  locationInput: String = '';
  
  selectedType: String = '';
  types: { value: string, display: string} [] = [
    { value: 'psychiatrist', display: 'Psychiatrist' },
    { value: 'psychotherapist', display: 'Psychotherapist' },
    { value: 'psychologist', display: 'Psychologist' },
    { value: 'practitioner', display: 'Non-medical Practitioner in Psychology' },
    { value: 'counselling', display: 'Counselling' },
    { value: 'educationalist', display: 'Educationalist & Educational Counsellor' },
    { value: 'coaching', display: 'Coaching & Life Counseling' },
  ];

  constructor() { }

  ngOnInit() {
  }

  
  openGoogleSearch() {
    const query = `${this.selectedType} ${this.locationInput}`;
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(url, 'type location');
  }

  openInfoModal() {
    this.infoModal.present();
  }

}
