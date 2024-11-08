import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Chart, registerables } from 'chart.js';
import { UserDataService } from 'src/app/services/user-data.service';

Chart.register(...registerables);

@Component({
  selector: 'app-well-being-tab',
  templateUrl: './well-being-tab.page.html',
  styleUrls: ['./well-being-tab.page.scss'],
})
export class WellBeingTabPage implements OnInit, AfterViewInit {
  progressBarType: string = 'indeterminate'; // progress bar type
  progressValue: number = 0; // current value of the progress bar
  connected: boolean = true; // connection status
  isLoading: boolean = true; // flag to indicate if data is loading
  selectedFeeling: string = "empty"; // the selected feeling of the user
  allActivities: string[] = []; // all added user activities of the to-do list
  newActivity: string = ''; // new activity added by the user
  username!: string; // the username of the logged in user
  profileImage: string | null | undefined = null; // the profile image URL or data for the user

  /**
   * Constructor for the WellBeingTabPage.
   * Initializes the page and subscribes to the user data service to update username.
   * 
   * @param menuController The menu controller for managing the side menu.
   * @param userDataService The service for managing user data, including username, profile image, and feelings.
   */
  constructor(
    private menuController: MenuController,
    private userDataService: UserDataService) {
    this.userDataService.usernameStorage$.subscribe(name => {
      this.username = name;
    })
  }

  /**
   * Lifecycle hook that runs when the component is initialized.
   * Starts the progress bar and subscribes to the profile image and feeling observables.
   */
  ngOnInit() {
    this.startProgressBar();
    this.userDataService.profileStorageImage$.subscribe((image) => {
      this.profileImage = image;
    });
    this.userDataService.selectedFeeling$.subscribe((feeling) => {
      this.selectedFeeling = feeling;
    });
  }

  /**
   * Lifecycle hook that runs after the view has been initialized.
   * Creates charts for mood, heart rate, and activity.
   */
  ngAfterViewInit(): void {
    this.createMoodChart();
    this.createHeartRateChart();
    this.createActivityChart();
  }

  /**
   * Starts the progress bar by increasing its value until 100%.
   * This simulates loading the data, and after 3 seconds, the loading flag is set to false.
   */
  startProgressBar() {
    // For normal progress bar type:
    /* let interval = setInterval(() => {this.progressValue += 0.01;
      if (this.progressValue > 1) { // stopping progress bar if 100% is reached
        clearInterval(interval); 
      }
    }, 30); // refreshing-pace (in ms)


    setTimeout(() => {
      clearInterval(interval); // ending progress bar after 3 seconds
      this.isLoading = false; // show if Smartwatch connection is on or off
    }, 3000); // stopping after 3000 ms (= 3 seconds) */

    setTimeout(() => {
      this.progressBarType = 'determinate';
      this.progressValue = 1;
      this.isLoading = false;
    }, 3000);
  }

  /**
   * Toggles the connection status between connected and disconnected.
   */
  toggleConnection() {
    this.connected = !this.connected;
  }

  /**
   * Creates the mood chart using the Chart.js library.
   * This chart tracks the user's mood over a week (Monday to Sunday).
   */
  createMoodChart() {
    const ctx_mood = (document.getElementById('mood-trend-chart') as HTMLCanvasElement).getContext('2d');

    if (ctx_mood) {
      new Chart(ctx_mood, {
        type: 'line',
        data: {
          labels: [
            'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
          ],
          datasets: [{
            label: 'Daily Mood',
            data: [2, 1, 3, 4, 5, 3, 4],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(60, 156, 5)',
            borderWidth: 1,
            pointBorderColor: 'rgba(60, 156, 5)',
            pointBorderWidth: 2,
            pointBackgroundColor: 'rgba(60, 156, 5)',
            fill: false,
            tension: 0.4
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
              min: 1,
              max: 5,
              ticks: {
                stepSize: 1,
                callback: function (value) {
                  const moodLabels: { [key: number]: string } = {
                    2: 'Bad',
                    4: 'Good'
                  };
                  return moodLabels[Number(value)] || '';
                }
              }
            },
            x: {
              ticks: {
                // no label rotation and aligned horizontally:
                maxRotation: 0,
                minRotation: 0
              }
            }
          }
        }
      });
    }
  }

  /**
   * Saves the selected feeling and updates the user data service.
   * 
   * @param feeling The feeling selected by the user.
   */
  saveFeeling(feeling: string) {
    this.selectedFeeling = feeling;
    this.userDataService.saveUserFeeling(feeling);
    console.log(`Selected Feeling: ${feeling}`);
  }

  /**
   * Creates the heart rate chart using the Chart.js library.
   * This chart visualizes the heart rate over a 24-hour period.
   */
  createHeartRateChart() {
    const ctx_hr = (document.getElementById('hr-trend-chart') as HTMLCanvasElement).getContext('2d');

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
            label: 'Heart Rate (BPM)',
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
            },
            x: {
              title: {
                display: true,
                text: 'Time of Day'
              },
              ticks: {
                callback: function (value, index, ticks) {
                  const labelsToShow = ['0', '8', '16', '24'];
                  const label = this.getLabelForValue(Number(value));
                  if (labelsToShow.includes(label)) {
                    return label;
                  }
                  return '';
                },
                // no label rotation and aligned horizontally:
                maxRotation: 0,
                minRotation: 0
              }
            }
          }
        }
      });
    }
  }

  /**
   * Adds a new activity to the list of activities.
   * Clears the input field after the activity is added.
   */
  addActivity(/* activity: string */) {
    if (this.newActivity && this.newActivity.trim() !== '') {
      this.allActivities.push(this.newActivity.trim());
      this.newActivity = '';
    }
  }

  /**
   * Removes an activity from the list of activities.
   * 
   * @param activity The activity to be removed.
   */
  removeActivity(activity: string) {
    this.allActivities = this.allActivities.filter(a => a !== activity);
  }

  /**
   * Creates the activity chart using the Chart.js library.
   * This chart visualizes active minutes over a 24-hour period.
   */
  createActivityChart() {
    const ctx_act = (document.getElementById('act-trend-chart') as HTMLCanvasElement).getContext('2d');

    if (ctx_act) {
      new Chart(ctx_act, {
        type: 'bar',
        data: {
          labels: Array.from({ length: 25 }, (_, i) => `${i}`),
          datasets: [{
            label: 'active Minutes',
            data: [
              0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 7, 0, 0, 0, 3, 0, 0, 0, 7, 4, 0, 0, 1],
            backgroundColor: 'rgba(54, 162, 235, 0.8)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderRadius: 1
          }]
        },
        options: {
          scales: {
            x: {
              ticks: {
                callback: function (value, index, ticks) {
                  const labelsToShow = ['0', '8', '16', '24'];
                  const label = this.getLabelForValue(Number(value));
                  if (labelsToShow.includes(label)) {
                    return label;
                  }
                  return '';
                },
                // no label rotation and aligned horizontally:
                maxRotation: 0,
                minRotation: 0
              },
              grid: {
                display: false
              }
            },
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 5,
                callback: function (value, index, ticks) {
                  return value === 0 ? '' : Number(value)
                }
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
