import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-work-focus',
  templateUrl: './work-focus.page.html',
  styleUrls: ['./work-focus.page.scss'],
})
export class WorkFocusPage implements OnInit {
  segmentValue: string = '1';
  currentSong: string = '';
  currentTitle: string = '';
  currentArtist: string = '';
  recentSong: string = '';
  recentTitle: string = '';
  recentArtist: string = '';
  recentWorkFocusSong: string = '';
  recentWorkFocusTitle: string = '';
  recentWorkFocusArtist: string = '';
  isRecentSong: boolean = false;
  @ViewChild('audioPlayer', { static: false }) audioPlayer!: ElementRef<HTMLAudioElement>;
  duration: number = 0;
  currentTime: number = 0;
  currentSongNumber: number = 0;
  currentCustomSongNumber: number = 0;
  isCustomList: boolean = false;
  isPlaying: boolean = false;

  songs: { title: string, artist: string, songUrl: string }[] = [
    { title: 'Calm', artist: 'Oleksii Kaplunskyi', songUrl: 'assets/songs/work-focus/Calm_Lesfm.mp3' },
    { title: 'Chill Lofi Instrumental', artist: 'NicholasPanek', songUrl: 'assets/songs/work-focus/Chill-Lofi-Instrumental_NicholasPanek.mp3' },
    { title: 'Close', artist: 'PianoAmor', songUrl: 'assets/songs/work-focus/Close_OlegFedak.mp3' },
    { title: 'Lo-Fi Instrumental', artist: 'CalvinClavier', songUrl: 'assets/songs/work-focus/Lo-Fi-Instrumental_NicholasPanek.mp3' },
    { title: 'Lofi Beat (Guitar & Piano)', artist: 'CalvinClavier', songUrl: 'assets/songs/work-focus/Lofi-Beat-Guitar-and-Piano_CalvinClavier.mp3' },
    { title: 'Mars', artist: 'CalvinClavier', songUrl: 'assets/songs/work-focus/Mars_OlegFedak.mp3' },
    { title: 'No More Stars', artist: 'CalvinClavier', songUrl: 'assets/songs/work-focus/No-More-Stars_CalvinClavier.mp3' },
    { title: 'Reading', artist: 'CalvinClavier', songUrl: 'assets/songs/work-focus/Reading_CalvinClavier.mp3' },
  ]

  customSongs: { title: string, artist: string, songUrl: string }[] = [];

  constructor(
    private navController: NavController,
    private actionSheetController: ActionSheetController,
    private userDataService: UserDataService
  ) { }

  get currentAudio() {
    return document.getElementById('workFocusSongs') as HTMLAudioElement;
  }

  ngOnInit() {
    this.addEventListener();
    this.loadRecentSong();
    this.loadCustomPlaylist();
  }

  segmentChanged(event: any) {
    this.segmentValue = event.detail.value;
  }

  goBack() {
    this.navController.back();
  }

  playFirstSong() {
    if (this.isRecentSong) {
      const song = { title: this.recentWorkFocusTitle, artist: this.recentWorkFocusArtist, songUrl: this.recentWorkFocusSong };
      if (this.isCustomList) {
        this.playCustomSong(song, this.customSongs.findIndex(s => s.songUrl === song.songUrl));
      } else {
        this.playSong(song);
      }
    } else {
      const firstSong = this.songs[0];
      this.playSong(firstSong);
    }
  }

  playSong(song: { title: string, artist: string, songUrl: string }) {
    this.currentSongNumber = this.songs.findIndex(s => s.songUrl === song.songUrl);
    this.isCustomList = false;
    this.currentSong = song.songUrl;
    this.currentTitle = song.title;
    this.currentArtist = song.artist;
    this.updateRecentSong(song);

    if (this.audioPlayer) {
      if (this.currentAudio.src !== song.songUrl) {
        this.currentAudio.src = song.songUrl;
        this.audioPlayer.nativeElement.load();
      }

      this.currentAudio.play().then(() => {
        this.isPlaying = true;
      }).catch((error) => {
        console.error('Error playing audio: ', error);
      });
    }
  }

  playCustomSong(song: { title: string, artist: string, songUrl: string }, index: number) {
    this.isCustomList = true;
    this.currentSong = song.songUrl;
    this.currentTitle = song.title;
    this.currentArtist = song.artist;
    this.updateRecentSong(song);
    this.currentCustomSongNumber = index;

    if (this.audioPlayer) {
      if (this.currentAudio.src !== song.songUrl) {
        this.currentAudio.src = song.songUrl;
        this.audioPlayer.nativeElement.load();
      }

      this.currentAudio.play().then(() => {
        this.isPlaying = true;
      }).catch((error) => {
        console.error('Error playing audio: ', error);
      });
    }
  }

  togglePlayPause() {
    if (this.currentAudio) {
      if (this.currentAudio.paused) {
        this.currentAudio.play().then(() => {
          this.isPlaying = true;
        }).catch((error) => {
          console.error('Error playing audio: ', error);
        });
      } else {
        this.currentAudio.pause();
        this.isPlaying = false;
      }
    }
  }

  previousSong() {
    if (this.isCustomList) {
      this.currentCustomSongNumber = (this.currentCustomSongNumber - 1 + this.customSongs.length) % this.customSongs.length;
      this.currentSong = this.customSongs[this.currentCustomSongNumber].songUrl;
      this.updateRecentSong(this.customSongs[this.currentCustomSongNumber]);
      this.currentAudio.src = this.customSongs[this.currentCustomSongNumber].songUrl;
      this.currentTitle = this.customSongs[this.currentCustomSongNumber].title;
      this.currentArtist = this.customSongs[this.currentCustomSongNumber].artist;
    } else {
      this.currentSongNumber = (this.currentSongNumber - 1 + this.songs.length) % this.songs.length;
      this.currentSong = this.songs[this.currentSongNumber].songUrl;
      this.updateRecentSong(this.songs[this.currentSongNumber]);
      this.currentAudio.src = this.songs[this.currentSongNumber].songUrl;
      this.currentTitle = this.songs[this.currentSongNumber].title;
      this.currentArtist = this.songs[this.currentSongNumber].artist;
    }
    this.currentAudio.play();
    this.isPlaying = true;
  }

  nextSong() {
    if (this.isCustomList) {
      this.currentCustomSongNumber = (this.currentCustomSongNumber + 1) % this.customSongs.length;
      this.currentSong = this.customSongs[this.currentCustomSongNumber].songUrl;
      this.updateRecentSong(this.customSongs[this.currentCustomSongNumber]);
      this.currentAudio.src = this.customSongs[this.currentCustomSongNumber].songUrl;
      this.currentTitle = this.customSongs[this.currentCustomSongNumber].title;
      this.currentArtist = this.customSongs[this.currentCustomSongNumber].artist;
    } else {
      this.currentSongNumber = (this.currentSongNumber + 1) % this.songs.length;
      this.currentSong = this.songs[this.currentSongNumber].songUrl;
      this.updateRecentSong(this.songs[this.currentSongNumber]);
      this.currentAudio.src = this.songs[this.currentSongNumber].songUrl;
      this.currentTitle = this.songs[this.currentSongNumber].title;
      this.currentArtist = this.songs[this.currentSongNumber].artist;
    }
    this.currentAudio.play();
    this.isPlaying = true;
  }

  goToTime(event: any) {
    this.currentAudio.currentTime = event.detail.value;
  }

  updateRecentSong(song: { title: string, artist: string, songUrl: string }) {
    localStorage.setItem('recentSong', song.songUrl);
    localStorage.setItem('recentTitle', song.title);
    localStorage.setItem('recentArtist', song.artist);
    localStorage.setItem('recentWorkFocusSong', song.songUrl);
    localStorage.setItem('recentWorkFocusTitle', song.title);
    localStorage.setItem('recentWorkFocusArtist', song.artist);
    
    this.recentWorkFocusSong = song.songUrl;
    this.recentWorkFocusTitle = song.title;
    this.recentWorkFocusArtist = song.artist;
    this.isRecentSong = true;

    this.userDataService.saveRecentSong(song);
  }

  addEventListener() {
    if (this.currentAudio) {
      // Event Listener to play next song if current song ended:
      this.currentAudio.addEventListener('ended', () => {
        this.nextSong();
      });

      // Event Listener to set duration:
      this.currentAudio.addEventListener('loadedmetadata', () => {
        this.duration = this.currentAudio.duration; // set duration as duration of current song playing
      });

      // Event Listener to set time:
      this.currentAudio.addEventListener('timeupdate', () => {
        if (this.currentAudio) {
          this.currentTime = this.currentAudio.currentTime; // set time as time of current song
        }
      });
    }
  }

  loadRecentSong() {
    const savedSong = localStorage.getItem('recentWorkFocusSong');
    const savedTitle = localStorage.getItem('recentWorkFocusTitle');
    const savedArtist = localStorage.getItem('recentWorkFocusArtist');

    if (savedSong && savedTitle && savedArtist) {
      this.recentWorkFocusSong = savedSong;
      this.recentWorkFocusTitle = savedTitle;
      this.recentWorkFocusArtist = savedArtist;
      this.currentSongNumber = this.songs.findIndex(song => song.songUrl === savedSong);
      this.isRecentSong = true;
    } else {
      this.isRecentSong = false;
    }
  }

  async presentActionSheet(song: { title: string, artist: string, songUrl: string }) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Add \'' + song.title + '\' to your Custom Playlist?',
      buttons: [
        {
          text: 'Add to Custom List',
          icon: 'add-circle',
          handler: () => {
            this.addToCustomPlaylist(song);
          }
        },
        {
          text: 'Cancel',
          icon: 'close-circle',
          role: 'cancel'
        }
      ]
    });
    return await actionSheet.present();
  }

  addToCustomPlaylist(song: { title: string, artist: string, songUrl: string }) {
    if (!this.customSongs.includes(song)) {
      this.customSongs.push(song);

      this.customSongs.sort((a, b) => a.title.localeCompare(b.title)); // sort alphabetically
    }

    localStorage.setItem('customSongs', JSON.stringify(this.customSongs));
  }

  removeFromCustomPlaylist(song: { title: string, artist: string, songUrl: string }) {
    const songIndex = this.customSongs.findIndex(
      customSong => (customSong.title === song.title && customSong.artist === song.artist && customSong.songUrl === song.songUrl)
    );

    if (songIndex !== -1) { // if song is in custom playlist
      this.customSongs.splice(songIndex, 1); // remove the one item in the custom list
    }
  }

  loadCustomPlaylist() {
    const savedCustomSongs = localStorage.getItem('customSongs');
    if (savedCustomSongs) {
        this.customSongs = JSON.parse(savedCustomSongs);
    }
  }
}