import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-specialists',
  templateUrl: './search-specialists.page.html',
  styleUrls: ['./search-specialists.page.scss'],
})
export class SearchSpecialistsPage implements OnInit {

  locationInput: String = "";
  selectedType: String = "";

  constructor() { }

  ngOnInit() {
  }

  
  openGoogleSearch() {
    const query = `${this.selectedType} ${this.locationInput}`;
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(url, 'type location');
  }

}
