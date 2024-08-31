import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mindpedia',
  templateUrl: './mindpedia.page.html',
  styleUrls: ['./mindpedia.page.scss'],
})
export class MindpediaPage implements OnInit {

  public diseaseData = [
    'Depression',
    'Schizophrenia',
    'Bipolar Disorder',
    'PTSD',
    'Obsessive Compulsive Disorder'
  ];

  public results = [...this.diseaseData];

  constructor() {}

  ngOnInit() {}

  handleInput(event:any) {
    const query = event.target.value.toLowerCase();
    this.results = this.diseaseData.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }



}
