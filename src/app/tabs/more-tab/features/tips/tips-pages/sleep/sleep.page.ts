import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sleep',
  templateUrl: './sleep.page.html',
  styleUrls: ['./sleep.page.scss'],
})
export class SleepPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
