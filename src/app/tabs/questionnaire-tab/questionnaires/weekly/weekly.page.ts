import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.page.html',
  styleUrls: ['./weekly.page.scss'],
})
export class WeeklyPage implements OnInit {

  constructor(
    private navController: NavController, 
    private userDataService: UserDataService, 
    private router: Router) { }

  ngOnInit() {
  }

  questions = [
    {
      questionText: '1. How often have you felt down or depressed in the past week?',
      type: 'scale',
      options: ['1', '2', '3', '4', '5'],
      selectedAnswer: null,
      points: [5, 4, 3, 2, 1]
    },
    {
      questionText: '2. How overwhelmed have you felt by daily activities in the past week?',
      type: 'scale',
      options: ['1', '2', '3', '4', '5'],
      selectedAnswer: null,
      points: [5, 4, 3, 2, 1]
    },
    {
      questionText: '3. Have you had difficulty making decisions or concentrating in the past week?',
      type: 'boolean',
      options: ['Yes', 'No'],
      selectedAnswer: null,
      points: [1, 5]
    },
    {
      questionText: '4. How often have you experienced pleasure from things you usually enjoy in the past week?',
      type: 'scale',
      options: ['1', '2', '3', '4', '5'],
      selectedAnswer: null,
      points: [1, 2, 3, 4, 5]
    },
    {
      questionText: '5. Have you experienced physical symptoms like headaches, stomach problems, or muscle tension in the past week that you attribute to stress?',
      type: 'boolean',
      options: ['Yes', 'No'],
      selectedAnswer: null,
      points: [1, 5]
    },
    {
      questionText: '6. How often have you felt lonely or isolated in the past week?',
      type: 'scale',
      options: ['1', '2', '3', '4', '5'],
      selectedAnswer: null,
      points: [5, 4, 3, 2, 1]
    },
    {
      questionText: '7. Have you gotten enough sleep and felt rested in the past week?',
      type: 'boolean',
      options: ['Yes', 'No'],
      selectedAnswer: null,
      points: [5, 1]
    },
    {
      questionText: '8. How often have you felt nervous or tense in the past week?',
      type: 'scale',
      options: ['1', '2', '3', '4', '5'],
      selectedAnswer: null,
      points: [5, 4, 3, 2, 1]
    },
    {
      questionText: '9. How often have you felt like you were losing control of your thoughts or emotions in the past week?',
      type: 'scale',
      options: ['1', '2', '3', '4', '5'],
      selectedAnswer: null,
      points: [5, 4, 3, 2, 1]
    },
    {
      questionText: '10. How optimistic do you feel about the upcoming week?',
      type: 'scale',
      options: ['1', '2', '3', '4', '5'],
      selectedAnswer: null,
      points: [1, 2, 3, 4, 5]
    }, 
  ];

  conclusion = [
    {
      pointBorder: 40,
      conclusionShort: 'Very good well-being.',
      conclusionText: 'No signs of serious mental health issues this week.'
    },
    {
      pointBorder: 30,
      conclusionShort: 'Good well-being.',
      conclusionText: 'Slight signs of stress or emotional difficulties may be present this week.'
    },
    {
      pointBorder: 20,
      conclusionShort: 'Limited well-being.',
      conclusionText: 'This week there were possible signs of stress, anxiety, or mild depression. Further monitoring or support may be needed.'
    },
    {
      pointBorder: 0,
      conclusionShort: 'Low well-being.',
      conclusionText: 'Your week consisted of significant distress or possible depressive tendencies. If this happens for some consecutive weeks, professional help is strongly recommended.'
    },
  ];

  submitAnswers() {
    let weeklyResult = this.evaluateWellBeing();
    this.userDataService.setWeeklyQuestionnaireResult(weeklyResult);
  
    this.router.navigateByUrl('tabs/questionnaire', { skipLocationChange: true }).then(() => { // save data by navigating "back" to questionnaires-tab
      this.router.navigate(['tabs/questionnaire']); 
    });
    
    //console.log('Selected Answers:', this.questions.map(q => q.selectedAnswer));
    //this.navController.back();
  }

  calculateWeeklyScore() {
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

  evaluateWellBeing(): { short: string, text: string, weight: number} {
    const totalScore = this.calculateWeeklyScore();

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
