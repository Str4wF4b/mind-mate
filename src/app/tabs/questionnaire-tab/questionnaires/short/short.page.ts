import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-short',
  templateUrl: './short.page.html',
  styleUrls: ['./short.page.scss'],
})
export class ShortPage implements OnInit {

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

  // Array of short questionnaire objects containing questions, types, options, selected answers and point values:
  questions = [
    {
      questionText: '1. How often in the past 24 hours have you felt like you lacked control over your life?',
      type: 'scale',
      options: ['1', '2', '3', '4', '5'],
      selectedAnswer: null,
      points: [5, 4, 3, 2, 1]
    },
    {
      questionText: '2. How satisfied have you been with your ability to handle stress in the past 24 hours?',
      type: 'scale',
      options: ['1', '2', '3', '4', '5'],
      selectedAnswer: null,
      points: [1, 2, 3, 4, 5]
    },
    {
      questionText: '3. How often in the past 24 hours have you felt the need to withdraw from social interactions?',
      type: 'scale',
      options: ['1', '2', '3', '4', '5'],
      selectedAnswer: null,
      points: [5, 4, 3, 2, 1]
    },
    {
      questionText: '4. How much energy did you have for your daily tasks in the past 24 hours?',
      type: 'scale',
      options: ['1', '2', '3', '4', '5'],
      selectedAnswer: null,
      points: [1, 2, 3, 4, 5]
    },
    {
      questionText: '5. How often in the past 24 hours have you experienced physical symptoms like palpitations or dizziness that you attribute to stress?',
      type: 'scale',
      options: ['1', '2', '3', '4', '5'],
      selectedAnswer: null,
      points: [5, 4, 3, 2, 1]
    },
    {
      questionText: '6. How positive have your thoughts been in the past 24 hours?',
      type: 'scale',
      options: ['1', '2', '3', '4', '5'],
      selectedAnswer: null,
      points: [1, 2, 3, 4, 5]
    },
    {
      questionText: '7. How optimistic have you felt about the future in the past 24 hours?',
      type: 'scale',
      options: ['1', '2', '3', '4', '5'],
      selectedAnswer: null,
      points: [1, 2, 3, 4, 5]
    }
  ];

  // Array of conclusion objects for evaluating short well-being scores:
  conclusion = [
    {
      pointBorder: 30,
      conclusionShort: 'Very good well-being.',
      conclusionText: 'No indications of acute mental health issues.'
    },
    {
      pointBorder: 20,
      conclusionShort: 'Moderate well-being.',
      conclusionText: 'There may be occasional challenges or stressors that should be monitored.'
    },
    {
      pointBorder: 15,
      conclusionShort: 'Limited well-being',
      conclusionText: 'Signs of stress or emotional difficulties are present. Further monitoring or support may be advisable.'
    },
    {
      pointBorder: 0,
      conclusionShort: 'Low well-being.',
      conclusionText: 'Your answers indicate significant distress or potential mental health problems. If this happens permanently, professional help is strongly recommended.'
    },
  ];

  /**
   * Submits the questionnaire answers, evaluates well-being and navigates to the questionnaire tab.
   */
  submitAnswers() {
    let shortResult = this.evaluateWellBeing();
    this.userDataService.setShortQuestionnaireResult(shortResult);

    // this.router.navigateByUrl('tabs/questionnaire', { skipLocationChange: true }).then(() => { // save data by navigating "back" to questionnaires-tab
    //   this.router.navigate(['tabs/questionnaire']); 
    // });
    
    //console.log('Selected Answers:', this.questions.map(q => q.selectedAnswer));
    this.navController.back();
  }

  /**
   * Calculates the total score based on selected answers and their respective points.
   * 
   * @returns Total score as a number.
   */
  calculateShortScore() {
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
    const totalScore = this.calculateShortScore();

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
