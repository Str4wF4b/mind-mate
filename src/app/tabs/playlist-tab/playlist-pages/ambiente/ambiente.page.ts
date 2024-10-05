import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-ambiente',
  templateUrl: './ambiente.page.html',
  styleUrls: ['./ambiente.page.scss'],
})
export class AmbientePage implements OnInit {
  segmentValue: string = '1';
  currentSong: string = '';
  currentTitle: string = '';
  currentArtist: string = '';
  recentSong: string = '';
  recentTitle: string = '';
  recentArtist: string = '';
  recentAmbienteSong: string = '';
  recentAmbienteTitle: string = '';
  recentAmbienteArtist: string = '';
  isRecentSong: boolean = false;
  @ViewChild('audioPlayer', { static: false }) audioPlayer!: ElementRef<HTMLAudioElement>;
  duration: number = 0;
  currentTime: number = 0;
  currentSongNumber: number = 0;
  currentCustomSongNumber: number = 0;
  isCustomList: boolean = false;
  isPlaying: boolean = false;

  songs: { title: string, artist: string, songUrl: string }[] = [
    { title: 'Autumn Fall', artist: 'CalvinClavier', songUrl: 'assets/songs/ambiente/Autumn-Fall_CalvinClavier.mp3' },
    { title: 'Autumn Rain Piano', artist: 'CalvinClavier', songUrl: 'assets/songs/ambiente/Autumn-Rain_CalvinClavier.mp3' },
    { title: 'Deep Ambient (60s Version)', artist: 'Oleksii Kaplunskyi', songUrl: 'assets/songs/ambiente/Deep-Ambient-60s-Version_OleksiiKaplunskyi.mp3' },
    { title: 'Distanced Ambient', artist: 'Samuel F. Johanns', songUrl: 'assets/songs/ambiente/Distanced-Ambient_SamuelFJohanns.mp3' },
    { title: 'Lost in Reverie', artist: 'CalvinClavier', songUrl: 'assets/songs/ambiente/Lost-In-Reverie_CalvinClavier.mp3' },
    { title: 'Mild Heaven', artist: 'UNIVERSFIELD', songUrl: 'assets/songs/ambiente/Mild-Heaven_UNIVERSFIELD.mp3' },
    { title: 'Motivational Electronic', artist: 'Alex Cristoforetti', songUrl: 'assets/songs/ambiente/Motivational-Electronic_AlexCristoforetti.mp3' },  
    { title: 'Nighfall', artist: 'CalvinClavier', songUrl: 'assets/songs/ambiente/Nightfall_CalvinClavier.mp3' },
    { title: 'Peaceful Ambient New Age', artist: 'LFC Records', songUrl: 'assets/songs/ambiente/Peaceful-Ambient-New-Age_LFCRecords.mp3' },
    { title: 'Rainy Day', artist: 'CalvinClavier', songUrl: 'assets/songs/ambiente/Rainy-Day_CalvinClavier.mp3' },
    { title: 'Relax Meditation Ambient', artist: 'Ilya Myagkov', songUrl: 'assets/songs/ambiente/Relax-Meditation-Ambient_IlyaMyagkov.mp3' },
    { title: 'Where Is My Mind (Ambient Piano)', artist: 'CalvinClavier', songUrl: 'assets/songs/ambiente/Where-Is-My-Mind-Ambient-Piano_CalvinClavier.mp3' }
  ]

  customSongs: { title: string, artist: string, songUrl: string }[] = [];

  constructor(
    private navController: NavController,
    private actionSheetController: ActionSheetController,
    private userDataService: UserDataService
  ) { }

  get currentAudio() {
    return document.getElementById('ambienteSongs') as HTMLAudioElement;
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
      const song = { title: this.recentAmbienteTitle, artist: this.recentAmbienteArtist, songUrl: this.recentAmbienteSong };
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
    localStorage.setItem('recentAmbienteSong', song.songUrl);
    localStorage.setItem('recentAmbienteTitle', song.title);
    localStorage.setItem('recentAmbienteArtist', song.artist);
    
    this.recentAmbienteSong = song.songUrl;
    this.recentAmbienteTitle = song.title;
    this.recentAmbienteArtist = song.artist;
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
    const savedSong = localStorage.getItem('recentAmbienteSong');
    const savedTitle = localStorage.getItem('recentAmbienteTitle');
    const savedArtist = localStorage.getItem('recentAmbienteArtist');

    if (savedSong && savedTitle && savedArtist) {
      this.recentAmbienteSong = savedSong;
      this.recentAmbienteTitle = savedTitle;
      this.recentAmbienteArtist = savedArtist;
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