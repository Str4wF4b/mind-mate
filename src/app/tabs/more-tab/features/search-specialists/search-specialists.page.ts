import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-search-specialists',
  templateUrl: './search-specialists.page.html',
  styleUrls: ['./search-specialists.page.scss'],
})
export class SearchSpecialistsPage implements OnInit {
  @ViewChild('infoModal') infoModal!: IonModal; // accessing IonModal component

  locationInput: String = ''; // stores user input for location
  selectedType: String = ''; // stores user input for type of specialist
  types: { value: string, display: string} [] = [ // array of specialist types with their display names
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

  /**
   * Constructs a Google search URL based on the selected specialist type and location input.
   * Opens a new window or tab to perform the search.
   */
  openGoogleSearch() {
    const query = `${this.selectedType} ${this.locationInput}`;
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(url, 'type location');
  }

  /**
   * Opens the informational modal using the ViewChild reference.
   * Presents more information related to the specialists' search functionality.
   */
  openInfoModal() {
    this.infoModal.present();
  }

}
