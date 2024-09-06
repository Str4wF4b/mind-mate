import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-more-tab',
  templateUrl: './more-tab.page.html',
  styleUrls: ['./more-tab.page.scss'],
})
export class MoreTabPage implements OnInit {
  username!: string;
  profileImage: string | null | undefined = null;

  selectedLanguage: string = 'english';
  languages: { value: string, display: string }[] = [
    { value: 'arabic', display: 'Arabic' },
    { value: 'bosnian', display: 'Bosnian' },
    { value: 'chinese', display: 'Chinese' },
    { value: 'corean', display: 'Corean' },
    { value: 'danish', display: 'Danish' },
    { value: 'dutch', display: 'Dutch' },
    { value: 'english', display: 'English' },
    { value: 'finnish', display: 'Finnish' },
    { value: 'french', display: 'French' },
    { value: 'german', display: 'German' },
    { value: 'greek', display: 'Greek' },
    { value: 'hindi', display: 'Hindi' },
    { value: 'irish', display: 'Irish' },
    { value: 'italian', display: 'Italian' },
    { value: 'japanese', display: 'Japanese' },
    { value: 'norwegian', display: 'Norwegian' },
    { value: 'polish', display: 'Polish' },
    { value: 'portuguese', display: 'Portuguese' },
    { value: 'russian', display: 'Russian' },
    { value: 'swedish', display: 'Swedish' },
    { value: 'spanish', display: 'Spanish' },
    { value: 'turkish', display: 'Turkish' },
  ];

  constructor(
    private userDataService: UserDataService
  ) {
    this.userDataService.usernameStorage$.subscribe((name) => {
      this.username = name;
    });
  }

  ngOnInit() {
    this.userDataService.profileStorageImage$.subscribe((image) => {
      this.profileImage = image;
    });
  }



  //openFeature(page: string) {
  //  this.navCtrl.navigateRoot(`/more-tab/${page}`);
  //}

  //openOthers(page: string) {
  //  this.navCtrl.navigateRoot(`/more-tab/${page}`);
  //}
}
