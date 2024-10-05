import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-free-your-mind',
  templateUrl: './free-your-mind.page.html',
  styleUrls: ['./free-your-mind.page.scss'],
})
export class FreeYourMindPage implements OnInit {
  segmentValue: string = '1';
  currentSong: string = '';
  currentTitle: string = '';
  currentArtist: string = '';
  recentSong: string = '';
  recentTitle: string = '';
  recentArtist: string = '';
  recentFreeYourMindSong: string = '';
  recentFreeYourMindTitle: string = '';
  recentFreeYourMindArtist: string = '';
  isRecentSong: boolean = false;
  @ViewChild('audioPlayer', { static: false }) audioPlayer!: ElementRef<HTMLAudioElement>;
  duration: number = 0;
  currentTime: number = 0;
  currentSongNumber: number = 0;
  currentCustomSongNumber: number = 0;
  isCustomList: boolean = false;
  isPlaying: boolean = false;

  songs: { title: string, artist: string, songUrl: string }[] = [
    { title: 'Echoes of the Night Dusk', artist: 'Free Sound Server', songUrl: 'assets/songs/free-your-mind/Echoes-of-the-Night-Dusk_FreeSoundServer.mp3' },
    { title: 'Emotional Piano Music', artist: 'CalvinClavier', songUrl: 'assets/songs/free-your-mind/Emotional-Piano-Music_CalvinClavier.mp3' },
    { title: 'Forgiveness', artist: 'Magnetic_Trailer', songUrl: 'assets/songs/free-your-mind/Forgiveness_Magnetic_Trailer.mp3' },
    { title: 'I Giorni', artist: 'CalvinClavier', songUrl: 'assets/songs/free-your-mind/I-Giorni_CalvinClavier.mp3' },
    { title: 'Mia & Sebastian x Je Te Laisserai Des Mots (Piano Cover)', artist: 'CalvinClavier', songUrl: 'assets/songs/free-your-mind/Mia&Sebastian-Je-Te-Laisserai-Des-Mots-Piano-Cover_CalvinClavier.mp3' },
    { title: 'Movement Of Life', artist: 'Oleksii Kalyna', songUrl: 'assets/songs/free-your-mind/Movement-of-Life_Oleksii Kalyna.mp3' },
    { title: 'Slow Focus and Meditation', artist: 'Anastasia Kir', songUrl: 'assets/songs/free-your-mind/Slow-Focus-and-Meditation_AnastasiaKir.mp3' },
    { title: 'Sunrise', artist: 'Alexander Nakarada', songUrl: 'assets/songs/free-your-mind/Sunrise_AlexanderNakarada.mp3' },
    { title: 'Una Luna', artist: 'CalvinClavier', songUrl: 'assets/songs/free-your-mind/Una-Luna_CalvinClavier.mp3' },
    { title: 'Van Gogh - Calm and Sad (Piano Cover)', artist: 'CalvinClavier', songUrl: 'assets/songs/free-your-mind/Van-Gogh-Calm-and-Sad-Piano-Cover_CalvinClavier.mp3' },
  ]

  customSongs: { title: string, artist: string, songUrl: string }[] = [];

  constructor(
    private navController: NavController,
    private actionSheetController: ActionSheetController,
    private userDataService: UserDataService
  ) { }

  get currentAudio() {
    return document.getElementById('freeYourMindSongs') as HTMLAudioElement;
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
      const song = { title: this.recentFreeYourMindTitle, artist: this.recentFreeYourMindArtist, songUrl: this.recentFreeYourMindSong };
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
    localStorage.setItem('recentFreeYourMindSong', song.songUrl);
    localStorage.setItem('recentFreeYourMindTitle', song.title);
    localStorage.setItem('recentFreeYourMindArtist', song.artist);
    
    this.recentFreeYourMindSong = song.songUrl;
    this.recentFreeYourMindTitle = song.title;
    this.recentFreeYourMindArtist = song.artist;
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
    const savedSong = localStorage.getItem('recentFreeYourMindSong');
    const savedTitle = localStorage.getItem('recentFreeYourMindTitle');
    const savedArtist = localStorage.getItem('recentFreeYourMindArtist');

    if (savedSong && savedTitle && savedArtist) {
      this.recentFreeYourMindSong = savedSong;
      this.recentFreeYourMindTitle = savedTitle;
      this.recentFreeYourMindArtist = savedArtist;
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
