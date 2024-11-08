import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.page.html',
  styleUrls: ['./daily.page.scss'],
})
export class DailyPage implements OnInit {

  /**
   * Constructor initializes services for navigation, user data management, and routing.
   * 
   * @param navController Service for handling navigation actions.
   * @param userDataService Service for managing user-specific data.
   * @param router Router service for programmatic navigation.
   */
  constructor(
    private navController: NavController, 
    private userDataService: UserDataService, 
    private router: Router) { }

  ngOnInit() {
  }

  // Array of daily questionnaire objects containing questions, types, options, selected answers and point values:
  questions = [
    {
      questionText: '1. How stressed or burdened do you feel today?',
      type: 'scale',
      options: ['1', '2', '3', '4', '5'],
      selectedAnswer: null,
      points: [5, 4, 3, 2, 1]
    },
    {
      questionText: '2. How satisfied are you with your general well-being today?',
      type: 'scale',
      options: ['1', '2', '3', '4', '5'],
      selectedAnswer: null,
      points: [1, 2, 3, 4, 5]
    },
    {
      questionText: '3. Did you have trouble sleeping today?',
      type: 'boolean',
      options: ['Yes', 'No'],
      selectedAnswer: null,
      points: [1, 5]
    },
    {
      questionText: '4. How often have you felt anxious or worried today?',
      type: 'scale',
      options: ['1', '2', '3', '4', '5'],
      selectedAnswer: null,
      points: [5, 4, 3, 2, 1]
    },
    {
      questionText: '5. How well are you copiong with your daily tasks today?',
      type: 'scale',
      options: ['1', '2', '3', '4', '5'],
      selectedAnswer: null,
      points: [1, 2, 3, 4, 5]
    },
    {
      questionText: '6. Do you feel that you have received social support from other people today?',
      type: 'scale',
      options: ['1', '2', '3', '4', '5'],
      selectedAnswer: null,
      points: [1, 2, 3, 4, 5]
    },
    {
      questionText: '7. How emotionally exhausted or burnt out did you feel today?',
      type: 'scale',
      options: ['1', '2', '3', '4', '5'],
      selectedAnswer: null,
      points: [5, 4, 3, 2, 1]
    },
    {
      questionText: '8. How satisfied are you with your social relationships today?',
      type: 'scale',
      options: ['1', '2', '3', '4', '5'],
      selectedAnswer: null,
      points: [1, 2, 3, 4, 5]
    },
    {
      questionText: '9. Have you experienced physical symptoms today, such as headaches or stomach pains, which you can attribute to stress?',
      type: 'boolean',
      options: ['Yes', 'No'],
      selectedAnswer: null,
      points: [1, 5]
    },
    {
      questionText: '10. How motivated do you feel today achieving your goals?',
      type: 'scale',
      options: ['1', '2', '3', '4', '5'],
      selectedAnswer: null,
      points: [1, 2, 3, 4, 5]
    }, 
  ];

  // Array of conclusion objects for evaluating daily well-being scores:
  conclusion = [
    {
      pointBorder: 42,
      conclusionShort: 'Very good well-being.',
      conclusionText: 'No signs of acute mental health issues today.'
    },
    {
      pointBorder: 30,
      conclusionShort: 'Moderate well-being.',
      conclusionText: 'Today there may be occasional stress or difficulties that should be monitored.'
    },
    {
      pointBorder: 20,
      conclusionShort: 'Limited well-being',
      conclusionText: 'Today, signs of stress or emotional difficulties are present. Further observation or support may be necessary.'
    },
    {
      pointBorder: 0,
      conclusionShort: 'Low well-being.',
      conclusionText: 'Your answers indicate significant distress or potential mental health problems. If this happens more often, professional help is strongly recommended.'
    },
  ];

  /**
   * Submits the questionnaire answers, evaluates well-being and navigates to the questionnaire tab.
   */
  submitAnswers() {
    let dailyResult = this.evaluateWellBeing();
    this.userDataService.setDailyQuestionnaireResult(dailyResult);
    
    this.router.navigateByUrl('tabs/questionnaire', { skipLocationChange: true }).then(() => { // save data by navigating "back" to questionnaires-tab
      this.router.navigate(['tabs/questionnaire']); 
    });
    
    //console.log('Selected Answers:', this.questions.map(q => q.selectedAnswer));
    //this.navController.back();
  }
  
  /**
   * Calculates the total score based on selected answers and their respective points.
   * 
   * @returns Total score as a number.
   */
  calculateDailyScore() {
    let totalScore = 0;

    this.questions.forEach(question => {
      if (question.selectedAnswer !== null) {
        const answerIndex = question.options.indexOf(String(question.selectedAnswer)); // find index of selected answer in options

        // adding the corresponding points for the selected answer:
        totalScore += question.points[answerIndex];
      }
    });

    return totalScore;
  }

  /**
   * Evaluates the well-being based on the calculated score and returns the appropriate conclusion.
   * 
   * @returns An object containing a short conclusion, full conclusion text and a weight value.
   */
  evaluateWellBeing(): { short: string, text: string, weight: number} {
    const totalScore = this.calculateDailyScore();

    if (totalScore >= this.conclusion[0].pointBorder) {
      return { short: this.conclusion[0].conclusionShort, text: this.conclusion[0].conclusionText, weight: 1 };
    } else if (totalScore >= this.conclusion[1].pointBorder) {
      return { short: this.conclusion[1].conclusionShort, text: this.conclusion[1].conclusionText, weight: 2 };
    } else if (totalScore >= this.conclusion[2].pointBorder) {
      return { short: this.conclusion[2].conclusionShort, text: this.conclusion[2].conclusionText, weight: 3 };
    } else {
      return { short: this.conclusion[3].conclusionShort, text: this.conclusion[3].conclusionText, weight: 4 };
    }
  }
}
