import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { eyeOffOutline, eyeOutline, lockClosed, mail } from 'ionicons/icons'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    addIcons({
      mail,
      lockClosed,
      eyeOutline,
      eyeOffOutline
    })
  }
}
