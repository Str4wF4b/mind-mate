import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-more-tab',
  templateUrl: './more-tab.page.html',
  styleUrls: ['./more-tab.page.scss'],
})
export class MoreTabPage implements OnInit {
  username!: string; // current username
  profileImage: string | null | undefined = null; // current profile image

  selectedLanguage: string = 'english'; // the currently selected language
  languages: { value: string, display: string }[] = [ // list of available languages for selection
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

  /**
   * Constructor for the MoreTabPage class.
   * Subscribes to the `usernameStorage$` observable to set the username.
   * @param userDataService Service for user data management.
   */
  constructor(
    private userDataService: UserDataService
  ) {
    this.userDataService.usernameStorage$.subscribe((name) => {
      this.username = name;
    });
  }

  /**
   * Lifecycle hook that runs after the component is initialized.
   * Subscribes to the `profileStorageImage$` observable to set the profile image.
   */
  ngOnInit() {
    this.userDataService.profileStorageImage$.subscribe((image) => {
      this.profileImage = image;
    });
  }
}
