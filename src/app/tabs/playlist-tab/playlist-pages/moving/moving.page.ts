import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-moving',
  templateUrl: './moving.page.html',
  styleUrls: ['./moving.page.scss'],
})
export class MovingPage implements OnInit {
  currentSongNumber: number = 0;

  songs: { title: string, artist: string, songUrl: string }[] = [
    { title: 'Energizante Motivation', artist: 'teodhollina', songUrl: 'assets/songs/moving/Energizante-Motivation_teodholina.mp3' },
    { title: 'Gentle Move', artist: 'Oleksii Holubiev', songUrl: 'assets/songs/moving/Gentle-Move_OleksiiHolubiev.mp3' },
    { title: 'Happy Motivation Project', artist: 'Zakhar Valaha', songUrl: 'assets/songs/moving/Happy-Motivation-Project(Main)_Good_B_Music.mp3' },
    { title: 'Inspiring', artist: 'u_hzqs915v4q', songUrl: 'assets/songs/moving/Inspiring_u_hzqs9i5v4q.mp3' },
    { title: 'Motivation', artist: 'Jeremiah Alves', songUrl: 'assets/songs/moving/Motivation_ShakibHasan.mp3' },
    { title: 'Motivation', artist: 'Shakib Hasan', songUrl: 'assets/songs/moving/Motivation_JeremiahAlves.mp3' },
    { title: 'Motivational Sport Trailer', artist: 'Dmitry Taras', songUrl: 'assets/songs/moving/Move_Re_clout.mp3' },
    { title: 'Move', artist: 'Re_clout', songUrl: 'assets/songs/moving/Motivational-Sport-Trailer_DmitryTaras.mp3' },
    { title: 'Move Your Vibe', artist: 'Alisia', songUrl: 'assets/songs/moving/Move-Your-Vibe_Alisia.mp3' },
    { title: 'Trap Future Bass', artist: 'Nver Avetyan', songUrl: 'assets/songs/moving/Trap-Future-Bass_NverAvetyan.mp3' },
    { title: 'Work Out', artist: 'Dmitry', songUrl: 'assets/songs/moving/Work-Out_Dmitry.mp3' },
  ]

  constructor(private navController: NavController) { }

  get currentAudio() {
    return document.getElementById('movingSongs') as HTMLAudioElement;
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
