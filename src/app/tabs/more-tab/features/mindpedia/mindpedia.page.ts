import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mindpedia',
  templateUrl: './mindpedia.page.html',
  styleUrls: ['./mindpedia.page.scss'],
})
export class MindpediaPage implements OnInit {

  // Array containing data about various mental health disorders:
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

  // Array holding the search results of mental health disorders:
  public results = [...this.diseaseData];

  constructor() {}

  ngOnInit() {}

  /**
   * Handles user input for searching the mental health disorders.
   * Filters the `diseaseData` array based on the query input and updates `results`.
   * @param event The event containing the input data from the user.
   */
  handleInput(event:any) {
    const query = event.target.value.toLowerCase();
    this.results = this.diseaseData.filter((d) => d.title.toLowerCase().indexOf(query) > -1);
  }
}
