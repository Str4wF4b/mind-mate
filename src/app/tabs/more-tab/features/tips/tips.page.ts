import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.page.html',
  styleUrls: ['./tips.page.scss'],
})
export class TipsPage implements OnInit {

  constructor(
  ) { }

  ngOnInit() { }

  // Array of tips pages with their router link and image:
  allTips: { title: string, routerLink: string, image: string } [] = [
    { title: 'Music', routerLink: '/more-tab/tips/music', image: 'assets/images/pandas/panda_music.png'},
    { title: 'Breathing Fresh Air', routerLink: '/more-tab/tips/breathing-air', image: 'assets/images/penguins/penguin_happy.png'},
    { title: 'Breathing Exercises', routerLink: '/more-tab/tips/breathing-exercises', image: 'assets/images/pandas/panda_yoga.png'},
    { title: 'Physical Activity & Exercise', routerLink: '/more-tab/tips/physical-activity', image: 'assets/images/penguins/penguin_sport.png'},
    { title: 'Meditation & Mindfulness', routerLink: '/more-tab/tips/meditation', image: 'assets/images/pandas/panda_meditating.png'},
    { title: 'Getting Sleep', routerLink: '/more-tab/tips/sleep', image: 'assets/images/penguins/penguin_sleep.png'},
    { title: 'Stay Calm', routerLink: '/more-tab/tips/stay-calm', image: 'assets/images/pandas/panda_relax.png'},
    { title: 'Concentrate', routerLink: '/more-tab/tips/concentrate', image: 'assets/images/penguins/penguin_reading.png'}
  ];
}
