import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-questionnaire-tab',
  templateUrl: './questionnaire-tab.page.html',
  styleUrls: ['./questionnaire-tab.page.scss'],
})
export class QuestionnaireTabPage implements OnInit {
  username!: string;
  profileImage: string | null | undefined = null;

  constructor(private userDataService: UserDataService) {
    this.userDataService.usernameStorage$.subscribe(name => {
      this.username = name;
    })
   }

  ngOnInit() {
    this.userDataService.profileStorageImage$.subscribe((image) => {
      this.profileImage = image;
    });
  }

}
