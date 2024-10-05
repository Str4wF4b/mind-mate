import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mindpedia',
  templateUrl: './mindpedia.page.html',
  styleUrls: ['./mindpedia.page.scss'],
})
export class MindpediaPage implements OnInit {

  public diseaseData: { title: string, routerLink: string }[] = [
    { title: 'Depression', routerLink: 'depression' },
    { title: 'Schizophrenia', routerLink: 'schizophrenia' },
    { title: 'Bipolar Disorder', routerLink: 'bipolar-disorder' },
    { title: 'PTSD', routerLink: 'ptsd' },
    { title: 'Obsessive Compulsive Disorder', routerLink: 'ocd' },
    { title: 'Panic Disorder & Agoraphobia', routerLink: 'panic-agrophobia' },
    { title: 'Personality Disorder', routerLink: 'personality-disorder' },
    { title: 'Eating Disorder', routerLink: 'eating-disorder' },
    { title: 'Generalized Anxiety Disorder', routerLink: 'gad' },
    { title: 'Social Anxiety Disorder', routerLink: 'sad' },
    { title: 'Sexual Dysfunction & Paraphilias', routerLink: 'sexual-dysfunctions-paraphilias' }
  ];

  public results = [...this.diseaseData];

  constructor() {}

  ngOnInit() {}

  handleInput(event:any) {
    const query = event.target.value.toLowerCase();
    this.results = this.diseaseData.filter((d) => d.title.toLowerCase().indexOf(query) > -1);
  }
}
