import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-free-your-mind',
  templateUrl: './free-your-mind.page.html',
  styleUrls: ['./free-your-mind.page.scss'],
})
export class FreeYourMindPage implements OnInit {
  segmentValue: string = '1'; // current segment value for page view
  currentSong: string = ''; // path of the current song
  currentTitle: string = ''; // title of the current song
  currentArtist: string = ''; // artist of the current song
  recentSong: string = ''; // path of the recently played song
  recentTitle: string = ''; // title of the recently played song
  recentArtist: string = ''; // artist of the recently played song
  recentFreeYourMindSong: string = ''; // path of the recently played free your mind song
  recentFreeYourMindTitle: string = ''; // title of the recently played free your mind song
  recentFreeYourMindArtist: string = ''; // artist of the recently played free your mind song
  isRecentSong: boolean = false; // indicates whether a recent song is available
  @ViewChild('audioPlayer', { static: false }) audioPlayer!: ElementRef<HTMLAudioElement>; // reference to the audio player element
  duration: number = 0; // duration of the current song in seconds
  currentTime: number = 0; // currently playing position in seconds
  currentSongNumber: number = 0; // index of the current song in featured playlist
  currentCustomSongNumber: number = 0; // index of the current song in custom playlist
  isCustomList: boolean = false; // indicates if custom playlist is being used
  isPlaying: boolean = false; // indicates if a song is currently playing

  // Array of free your mind songs containing song details:
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

  // Array for free your mind playlist songs:
  customSongs: { title: string, artist: string, songUrl: string }[] = [];

  /**
   * Constructor for FreeYourMindPage.
   * @param navController service for handling navigation between pages
   * @param actionSheetController service for displaying an action sheet with options
   * @param userDataService service for managing and retrieving user data
   */
  constructor(
    private navController: NavController,
    private actionSheetController: ActionSheetController,
    private userDataService: UserDataService
  ) { }

  /**
   * Getter method for accessing the current audio element.
   * @returns {HTMLAudioElement} The audio element used for playing songs.
   */
  get currentAudio() {
    return document.getElementById('freeYourMindSongs') as HTMLAudioElement;
  }

  /**
   * Lifecycle hook that runs after the component's initialization.
   * Sets up event listeners, loads the recent song, and loads the custom playlist from local storage.
   */
  ngOnInit() {
    this.addEventListener();
    this.loadRecentSong();
    this.loadCustomPlaylist();
  }

  /**
   * Handles the change of segment value for UI updates.
   * @param event the event containing the new segment value
   */
  segmentChanged(event: any) {
    this.segmentValue = event.detail.value;
  }

  /**
   * Navigates back to the previous page.
   */
  goBack() {
    this.navController.back();
  }

  /**
   * Plays the first song in the playlist or the most recently played song if available.
   */
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

  /**
   * Plays a specified song and updates the current song state.
   * @param song the song object containing title, artist and song URL
   */
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

  /**
   * Plays a song from the custom playlist and updates the state.
   * @param song the song object from the custom playlist
   * @param index the index of the song in the custom playlist
   */
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

  /**
   * Toggles between play and pause states for the current song.
   */
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

  /**
   * Plays the previous song in the current playlist.
   */
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

  /**
   * Plays the next song in the current playlist.
   */
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

  /**
   * Updates the current playback position to a specified time.
   * @param event The event containing the new playback time (in seconds).
   */
  goToTime(event: any) {
    this.currentAudio.currentTime = event.detail.value;
  }

  /**
   * Updates the most recently played song details and saves them to local storage.
   * @param song The song object containing title, artist, and song URL.
   */
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

  /**
   * Adds event listeners to the audio player for handling song end, loaded metadata, and time updates.
   */
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

  /**
   * Loads the most recently played song from local storage.
   */
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

  /**
   * Presents an action sheet allowing the user to add a song to their custom playlist.
   * @param song The song object containing title, artist and song URL.
   */
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

  /**
   * Adds a song to the custom playlist and updates local storage.
   * @param song The song object to be added to the custom playlist.
   */
  addToCustomPlaylist(song: { title: string, artist: string, songUrl: string }) {
    if (!this.customSongs.includes(song)) {
      this.customSongs.push(song);

      this.customSongs.sort((a, b) => a.title.localeCompare(b.title)); // sort alphabetically
    }

    localStorage.setItem('customSongs', JSON.stringify(this.customSongs));
  }

  /**
   * Removes a song from the custom playlist and updates local storage.
   * @param song The song object to be removed from the custom playlist.
   */
  removeFromCustomPlaylist(song: { title: string, artist: string, songUrl: string }) {
    const songIndex = this.customSongs.findIndex(
      customSong => (customSong.title === song.title && customSong.artist === song.artist && customSong.songUrl === song.songUrl)
    );

    if (songIndex !== -1) { // if song is in custom playlist
      this.customSongs.splice(songIndex, 1); // remove the one item in the custom list
    }
  }

  /**
   * Loads the custom playlist from local storage.
   */
  loadCustomPlaylist() {
    const savedCustomSongs = localStorage.getItem('customSongs');
    if (savedCustomSongs) {
        this.customSongs = JSON.parse(savedCustomSongs);
    }
  }
}
