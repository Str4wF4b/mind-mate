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

  public playlists: { title: string, caption: string, routerLink: string, imageSrc: string }[] = [
    { title: 'Calm Down', caption: 'Time to relax and rest', routerLink: '/playlist-tab/calm-down', imageSrc: 'girl_meditating.png' },
    { title: 'Work & Focus', caption: 'Start enjoying your work again', routerLink: '/playlist-tab/work-focus', imageSrc: 'girl_work.png' },
    { title: 'Moving', caption: 'Move and feel better', routerLink: '/playlist-tab/moving', imageSrc: 'boy_running.png' },
    { title: 'Ambiente', caption: 'Calm & atmospheric music fitting your mood', routerLink: '/playlist-tab/ambiente', imageSrc: 'landscape.png' },
    { title: 'Sleep', caption: 'Right atmosphere to fall asleep', routerLink: '/playlist-tab/sleep', imageSrc: 'girl_sleeping.png' },
    { title: 'Free Your Mind', caption: 'Forget your thoughts for some minutes', routerLink: '/playlist-tab/free-your-mind', imageSrc: 'boy_free-your-mind.png' },
    
  ];

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
