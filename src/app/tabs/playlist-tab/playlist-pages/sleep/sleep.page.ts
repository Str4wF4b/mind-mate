import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sleep',
  templateUrl: './sleep.page.html',
  styleUrls: ['./sleep.page.scss'],
})
export class SleepPage implements OnInit {
  currentSongNumber: number = 0;

  songs: { title: string, artist: string, songUrl: string }[] = [
    { title: 'Crescent Moon', artist: 'Tomomi Kato', songUrl: 'assets/songs/sleep/Crescent-Moon_TomomiKato.mp3' },
    { title: 'Dawn Break', artist: 'Tech Oasis', songUrl: 'assets/songs/sleep/Dawn-Break_TechOasis.mp3' },
    { title: 'Dreamland Lullaby Feelings', artist: 'Free Sound Server', songUrl: 'assets/songs/sleep/Dreamland-Lullaby-Feelings_FreeSoundServer.mp3' },
    { title: 'Fall Asleep', artist: 'CalvinClavier', songUrl: 'assets/songs/sleep/Fall-Asleep_CalvinClavier.mp3' },
    { title: 'Goodnight', artist: 'CalvinClavier', songUrl: 'assets/songs/sleep/Goodnight_CalvinClavier.mp3' },
    { title: 'Melancholy', artist: 'Tomomi Kato', songUrl: 'assets/songs/sleep/Melancholy_TomomiKato.mp3' },
    { title: 'Night Sky', artist: 'Lof Cosmos', songUrl: 'assets/songs/sleep/Night-Sky_LofCosmos.mp3' },
    { title: 'Peaceful Sleep', artist: 'Zakhar Valaha', songUrl: 'assets/songs/sleep/Peaceful-Sleep_ZakharValaha.mp3' },
    { title: 'Sleep', artist: 'teodholina', songUrl: 'assets/songs/sleep/Sleep_teodholina.mp3' }
  ]

  constructor(private navController: NavController) { }

  get currentAudio() {
    return document.getElementById('sleepSongs') as HTMLAudioElement;
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
