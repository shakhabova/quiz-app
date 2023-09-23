import { Component } from '@angular/core';
import { Question } from '../Question';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css'],
})
export class QuestionsListComponent {
  title = 'quiz-app';
  public rightAnswersCount = 0;

  constructor(private router: Router) {}

  public questions: Question[] = [
    {
      id: 1,
      description: 'Your favorite season is',
      multiple_correct_answers: true,
      answers: {
        answer_a: 'Summer',
        answer_b: 'Winter',
        answer_c: 'Spring',
        answer_d: 'Autumn',
      },
      correct_answers: {
        answer_a_correct: false,
        answer_b_correct: false,
        answer_c_correct: true,
        answer_d_correct: false,
      },
    },
    {
      id: 2,
      description: 'Your favorite food is',
      multiple_correct_answers: false,
      answers: {
        answer_a: 'Pizza',
        answer_b: 'Soup',
        answer_c: 'Meat',
      },
      correct_answers: {
        answer_a_correct: true,
        answer_b_correct: false,
        answer_c_correct: false,
      },
    },
  ];

  public onAnswer(isRight: boolean) {
    if (isRight) {
      this.rightAnswersCount++;
    }
  }

  public goToResults() {
    this.router.navigate(['results'], {
      queryParams: {
        result: (this.rightAnswersCount / this.questions.length) * 100,
      },
    });
  }
}
