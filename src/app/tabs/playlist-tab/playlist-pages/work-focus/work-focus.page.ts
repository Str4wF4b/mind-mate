import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-work-focus',
  templateUrl: './work-focus.page.html',
  styleUrls: ['./work-focus.page.scss'],
})
export class WorkFocusPage implements OnInit {
  currentSongNumber: number = 0;

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

  constructor(private navController: NavController) { }

  get currentAudio() {
    return document.getElementById('workFocusSongs') as HTMLAudioElement;
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
