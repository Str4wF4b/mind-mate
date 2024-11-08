import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Chart } from 'chart.js';
import { UserDataService } from 'src/app/services/user-data.service';
//import { LayoutManager } from 'src/app/utils/layout-manager';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.page.html',
  styleUrls: ['./home-tab.page.scss'],
})
export class HomeTabPage implements OnInit {
  username!: string; // the username of the logged-in user
  profileImage: string | null | undefined = null; // the profile image URL or data for the user
  selectedUserFeeling: string = 'empty'; // the selected feeling of the user
  recentTitle = ''; // the title of the most recent song
  recentArtist = ''; // the artist of the most recent song
  isLoggedIn: boolean = false; // flag to check if the user is logged in

  /**
   * Constructor for the HomeTabPage.
   * Initializes the page and subscribes to the user data service for updates.
   * 
   * @param navCtrl The navigation controller for navigating between tabs.
   * @param userDataService The service for managing user data, including username, profile image, and feelings.
   */
  constructor(
    private navCtrl: NavController,
    private userDataService: UserDataService
  ) {
    this.userDataService.usernameStorage$.subscribe((name) => {
      this.username = name;
    });
  }

  /**
   * Lifecycle hook that runs when the component is initialized.
   * Subscribes to the user data service to get the profile image and user feelings.
   */
  ngOnInit() {
    this.userDataService.profileStorageImage$.subscribe((image) => {
      this.profileImage = image;
    });
    this.userDataService.selectedFeeling$.subscribe((feeling) => {
      this.selectedUserFeeling = feeling;
    });

    this.isLoggedIn = true;
  }

  /**
   * Lifecycle hook that runs after the view has been initialized.
   * Creates charts for heart rate and activity.
   */
  ngAfterViewInit() {
    this.createHeartRateChart();
    this.createActivityChart();
    //new LayoutManager();
  }

  /**
   * Lifecycle hook that runs when the view will enter.
   * Updates the recent song title and artist if the user is logged in.
   */
  ionViewWillEnter() {
    if (this.isLoggedIn) { // update title and artist only after the log in or sign up
      this.recentTitle = this.userDataService.getRecentSong().title;
      this.recentArtist = this.userDataService.getRecentSong().artist;
    }
  }

  /**
   * Switches the current tab to the specified tab.
   * 
   * @param tab The name of the tab to navigate to.
   */
  switchTab(tab: string) {
    this.navCtrl.navigateRoot(`/tabs/${tab}`);
  }


  /**
   * Creates the heart rate chart using the Chart.js library.
   * This chart visualizes the heart rate over a 24-hour period.
   */
  createHeartRateChart() {
    const ctx_hr = (document.getElementById('hr-trend-chart-home') as HTMLCanvasElement).getContext('2d');

    if (ctx_hr) {
      new Chart(ctx_hr, {
        type: 'line',
        data: {
          labels: [
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
            '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
            '21', '22', '23', '24'
          ],
          datasets: [{
            data: [60, 61, 62, 59, 55, 57, 56, 60, 65, 70, 66, 80, 78, 83, 81, 61, 63, 68, 59, 64, 58, 61, 60, 59, 60],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            pointRadius: 0,
            fill: false,
            tension: 0.0
          }]
        },
        options: {
          plugins: {
            legend: {
              display: false  // hide legend label
            }
          },
          scales: {
            y: {
              beginAtZero: false,
              grid: {
                display: false
              },
              ticks: {
                display: false
              },
              border: {
                display: true,
                color: 'rgba(240, 255, 255, 0.5)'
              }
            },
            x: {
              grid: {
                display: false
              },
              ticks: {
                display: false
              },
              border: {
                display: true,
                color: 'rgba(240, 255, 255, 0.5)'
              }
            }
          }
        }
      });
    }
  }

  /**
   * Creates the activity chart using the Chart.js library.
   * This chart visualizes active minutes throughout a 24-hour period.
   */
  createActivityChart() {
    const ctx_act = (document.getElementById('act-trend-chart-home') as HTMLCanvasElement).getContext('2d');

    if (ctx_act) {
      new Chart(ctx_act, {
        type: 'bar',
        data: {
          labels: Array.from({ length: 25 }, (_, i) => `${i}`),
          datasets: [{
            label: 'active Minutes',
            data: [
              0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 7, 0, 0, 0, 3, 0, 0, 0, 7, 4, 0, 0, 1],
            backgroundColor: 'rgb(55, 35, 183, 0.8)',
            borderColor: 'rgb(55, 35, 183, 0.8)',
            borderRadius: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: false,
              grid: {
                display: false
              },
              ticks: {
                display: false
              },
              border: {
                display: true,
                color: 'rgba(240, 255, 255, 0.5)'
              }
            },
            x: {
              grid: {
                display: false
              },
              ticks: {
                display: false
              },
              border: {
                display: true,
                color: 'rgba(240, 255, 255, 0.5)'
              }
            }
          },
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });
    }
  }
}
