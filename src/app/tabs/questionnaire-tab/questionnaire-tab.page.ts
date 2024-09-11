import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-questionnaire-tab',
  templateUrl: './questionnaire-tab.page.html',
  styleUrls: ['./questionnaire-tab.page.scss'],
})
export class QuestionnaireTabPage implements OnInit {
  username!: string;
  profileImage: string | null | undefined = null;
  currentQuestionnaire: string = '';
  @ViewChild('settings') settingsModal!: IonModal;
  weeklyQuestionnaireResult: { short: string, text: string, weight: number } = { short: '', text: '', weight: 0 };
  dailyQuestionnaireResult: { short: string, text: string, weight: number } = { short: '', text: '', weight: 0 };
  shortQuestionnaireResult: { short: string, text: string, weight: number } = { short: '', text: '', weight: 0 };
  weeklyQuestionnaireText: string = '';
  weeklyQuestionnaireShortText: string = '';
  dailyQuestionnaireText: string = '';
  dailyQuestionnaireShortText: string = '';
  shortQuestionnaireText: string = '';
  shortQuestionnaireShortText: string = '';
  currentDate: string = '';
  lastWeekDay: string = '';
  isFabHidden = false;
  lastScrollTop = 0;


  constructor(private userDataService: UserDataService) {
    this.userDataService.usernameStorage$.subscribe(name => {
      this.username = name;
    });
  }


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

  ngOnInit() {
    this.userDataService.profileStorageImage$.subscribe((image) => {
      this.profileImage = image;
    });
    
    this.setUpDate();

  }

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

  selectQuestionnaire(type: string) {
    this.currentQuestionnaire = type;
  }

  openSettingsModal() {
    this.settingsModal.present();
  }

  setUpDate() {
    const today = new Date();
    this.currentDate = today.toLocaleDateString();
    const lastWeek = new Date(today);
    lastWeek.setDate(today.getDate() -7);
    this.lastWeekDay = `${lastWeek.getDate().toString()}.${(lastWeek.getMonth()+1).toString()}`;
  }
}
