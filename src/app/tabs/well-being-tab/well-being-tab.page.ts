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
  connected: boolean = true;
  selectedFeeling: string = "empty";
  allActivities: string[] = [];
  newActivity: string = "";
  username!: string;
  profileImage: string | null | undefined = null;

  constructor(
    private menuController: MenuController, 
    private userDataService: UserDataService) {
    this.userDataService.username$.subscribe(name => {
      this.username = name;
    })
   }


  ngOnInit() {
   // this.menuController.enable(true, 'side-menu');
   this.userDataService.profileStorageImage$.subscribe((image) => {
    this.profileImage = image;
  });
  }

  ngAfterViewInit(): void {
    this.createMoodChart();
    this.createHeartRateChart();
    this.createActivityChart();
  }

  toggleConnection() {
    this.connected = !this.connected;
  }

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

  saveFeeling(feeling: string) {
    this.selectedFeeling = feeling;
    console.log(`Selected Feeling: ${feeling}`);
  }

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

  addActivity(/* activity: string */) {
    if (this.newActivity && this.newActivity.trim() !== '') {
      this.allActivities.push(this.newActivity.trim());
      this.newActivity = '';
    }
  }

  removeActivity(activity: string) {
    this.allActivities = this.allActivities.filter(a => a !== activity);
  }

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
