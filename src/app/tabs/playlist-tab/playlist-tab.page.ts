import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-playlist-tab',
  templateUrl: './playlist-tab.page.html',
  styleUrls: ['./playlist-tab.page.scss'],
})
export class PlaylistTabPage implements OnInit {
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
