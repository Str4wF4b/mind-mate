import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-questionnaire-tab',
  templateUrl: './questionnaire-tab.page.html',
  styleUrls: ['./questionnaire-tab.page.scss'],
})
export class QuestionnaireTabPage implements OnInit {
  username!: string; // current username
  profileImage: string | null | undefined = null; // the current profile image
  currentQuestionnaire: string = ''; // the currently selected questionnaire type
  @ViewChild('settings') settingsModal!: IonModal; // reference to the IonModal element
  weeklyQuestionnaireResult: { short: string, text: string, weight: number } = { short: '', text: '', weight: 0 }; // map to store weekly questionnaire results
  dailyQuestionnaireResult: { short: string, text: string, weight: number } = { short: '', text: '', weight: 0 }; // map to store daily questionnaire results
  shortQuestionnaireResult: { short: string, text: string, weight: number } = { short: '', text: '', weight: 0 }; // map to store short questionnaire results
  weeklyQuestionnaireText: string = ''; // description of weekly questionnaire result
  weeklyQuestionnaireShortText: string = ''; // conclusion of weekly questionnaire result
  dailyQuestionnaireText: string = ''; // description of daily questionnaire result
  dailyQuestionnaireShortText: string = ''; // conclusion of daily questionnaire result
  shortQuestionnaireText: string = ''; // description of short questionnaire result
  shortQuestionnaireShortText: string = ''; // conclusion of short questionnaire result
  currentDate: string = ''; // current date
  lastWeekDay: string = ''; // current week date
  isFabHidden = false; // boolean for toggling the display of the floating action button
  lastScrollTop = 0; // tracks the last scroll position


  /**
   * Constructor for initializing services and subscribing to user data changes.
   * 
   * @param userDataService Service for accessing and managing user data.
   */
  constructor(private userDataService: UserDataService) {
    this.userDataService.usernameStorage$.subscribe(name => {
      this.username = name;
    });
  }

  /**
   * Host listener for window scroll events to hide or show the FAB based on scroll direction.
   */
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > this.lastScrollTop) {
      // User is scrolling down
      this.isFabHidden = true;
    } else {
      // User is scrolling up
      this.isFabHidden = false;
    }
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  }

  /**
   * Lifecycle hook called when the component is initialized.
   * Subscribes to profile image updates and sets up date values.
   */
  ngOnInit() {
    this.userDataService.profileStorageImage$.subscribe((image) => {
      this.profileImage = image;
    });
    
    this.setUpDate();
  }

  /**
   * Ionic lifecycle hook triggered when the view is about to be entered.
   * Loads the questionnaire results from the user data service.
   */
  ionViewWillEnter() {
    const weeklyResult = this.userDataService.getWeeklyQuestionnaireResult();
    this.weeklyQuestionnaireText = weeklyResult.text;
    this.weeklyQuestionnaireShortText = weeklyResult.short;

    const dailyResult = this.userDataService.getDailyQuestionnaireResult();
    this.dailyQuestionnaireText = dailyResult.text;
    this.dailyQuestionnaireShortText = dailyResult.short;
    
    const shortResult = this.userDataService.getShortQuestionnaireResult();
    this.shortQuestionnaireText = shortResult.text;
    this.shortQuestionnaireShortText = shortResult.short;
  }

  /**
   * Sets the currently active questionnaire type.
   * 
   * @param type The type of questionnaire selected.
   */
  selectQuestionnaire(type: string) {
    this.currentQuestionnaire = type;
  }

  /**
   * Opens the settings modal for the questionnaire page.
   */
  openSettingsModal() {
    this.settingsModal.present();
  }

  /**
   * Sets up the current date and the date one week prior in a formatted string.
   */
  setUpDate() {
    const today = new Date();
    this.currentDate = today.toLocaleDateString();
    const lastWeek = new Date(today);
    lastWeek.setDate(today.getDate() -7);
    this.lastWeekDay = `${lastWeek.getDate().toString()}.${(lastWeek.getMonth()+1).toString()}`;
  }
}
