import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-free-your-mind',
  templateUrl: './free-your-mind.page.html',
  styleUrls: ['./free-your-mind.page.scss'],
})
export class FreeYourMindPage implements OnInit {
  currentSongNumber: number = 0;

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

  constructor(private navController: NavController) { }

  get currentAudio() {
    return document.getElementById('freeYourMindSongs') as HTMLAudioElement;
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
