import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mindpedia',
  templateUrl: './mindpedia.page.html',
  styleUrls: ['./mindpedia.page.scss'],
})
export class MindpediaPage implements OnInit {

  public diseaseData: { title: string, routerLink: string }[] = [
    { title: 'Depression', routerLink: '/more-tab/mindpedia/depression' },
    { title: 'Schizophrenia', routerLink: '/more-tab/mindpedia/schizophrenia' },
    { title: 'Bipolar Disorder', routerLink: '/more-tab/mindpedia/bipolar-disorder' },
    { title: 'PTSD', routerLink: '/more-tab/mindpedia/ptsd' },
    { title: 'Obsessive Compulsive Disorder', routerLink: 'ocd' },
  ];

  public results = [...this.diseaseData];

  constructor() {}

  ngOnInit() {}

  handleInput(event:any) {
    const query = event.target.value.toLowerCase();
    this.results = this.diseaseData.filter((d) => d.title.toLowerCase().indexOf(query) > -1);
  }



}
