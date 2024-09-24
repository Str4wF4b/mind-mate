import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-calm-down',
  templateUrl: './calm-down.page.html',
  styleUrls: ['./calm-down.page.scss'],
})
export class CalmDownPage implements OnInit {
  currentSongNumber: number = 0;

  songs: { title: string, artist: string, songUrl: string }[] = [
    { title: 'Calm and Peaceful', artist: 'Oleksii Kaplunskyi', songUrl: 'assets/songs/calm-down/Calm-and-Peaceful_Lesfm.mp3' },
    { title: 'Calm Bird', artist: 'PianoAmor', songUrl: 'assets/songs/calm-down/Calm-Bird_PianoAmor.mp3' },
    { title: 'Calm Morning', artist: 'PianoAmor', songUrl: 'assets/songs/calm-down/Calm-Morning_PianoAmor.mp3' },
    { title: 'Chandelier (Piano Version)', artist: 'CalvinClavier', songUrl: 'assets/songs/calm-down/Chandelier-Piano-Version_CalvinClavier.mp3' },
    { title: 'Endless World', artist: 'CalvinClavier', songUrl: 'assets/songs/calm-down/Endless-World_CalvinClavier.mp3' },
    { title: 'Everything Works Out In The End (Piano Version)', artist: 'CalvinClavier', songUrl: 'assets/songs/calm-down/Everything-Works-Out-In-The-End_CalvinClavier.mp3' },
    { title: 'Just Give Me A Reason (Piano Version)', artist: 'CalvinClavier', songUrl: 'assets/songs/calm-down/Just-Give-Me-A-Reason-Piano-Version_CalvinClavier.mp3' },
    { title: 'Lonely', artist: 'CalvinClavier', songUrl: 'assets/songs/calm-down/Lonely_CalvinClavier.mp3' }
  ]

  constructor(private navController: NavController) { }

  get currentAudio() {
    return document.getElementById('calmDownSongs') as HTMLAudioElement;
  }

  ngOnInit() {
    // Event Listener to play next song if current song ended
    this.currentAudio.addEventListener('ended', () => {
      this.nextSong();
    });
  }

  goBack() {
    this.navController.back();
  }

  playSong() {
    this.currentAudio.play();
  }

  pauseSong() {
    this.currentAudio.pause();
  }

  nextSong() {
    this.currentSongNumber = (this.currentSongNumber + 1) % this.songs.length;
    this.currentAudio.src = this.songs[this.currentSongNumber].songUrl;
    this.currentAudio.play();
  }

  previousSong() {
    this.currentSongNumber = (this.currentSongNumber - 1 + this.songs.length) % this.songs.length;
    this.currentAudio.src = this.songs[this.currentSongNumber].songUrl;
    this.currentAudio.play();
  }
}
