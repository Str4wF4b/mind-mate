import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ambiente',
  templateUrl: './ambiente.page.html',
  styleUrls: ['./ambiente.page.scss'],
})
export class AmbientePage implements OnInit {
  currentSongNumber: number = 0;

  songs: { title: string, artist: string, songUrl: string }[] = [
    { title: 'Autumn Fall', artist: 'Calvin Clavier', songUrl: 'assets/songs/ambiente/Autumn-Fall_CalvinClavier.mp3' },
    { title: 'Autumn Rain Piano', artist: 'Calvin Clavier', songUrl: 'assets/songs/ambiente/Autumn-Rain_CalvinClavier.mp3' },
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

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.navController.back();
  }

  playSong() {
    const audio: any = document.getElementById('ambienteSongs') as HTMLAudioElement;
    audio.play();
  }

  pauseSong() {
    const audio: any = document.getElementById('ambienteSongs') as HTMLAudioElement;
    audio.pause();
  }

  nextSong() {
    this.currentSongNumber = (this.currentSongNumber + 1) % this.songs.length;
    const audio: any = document.getElementById('ambienteSongs') as HTMLAudioElement;
    audio.src = this.songs[this.currentSongNumber].songUrl;
    audio.play();
  }

  previousSong() {
    this.currentSongNumber = (this.currentSongNumber - 1 + this.songs.length) % this.songs.length;
    const audio: any = document.getElementById('ambienteSongs') as HTMLAudioElement;
    audio.src = this.songs[this.currentSongNumber].songUrl;
    audio.play();
  }
}
