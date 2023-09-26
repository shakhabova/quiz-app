import { Component } from '@angular/core';
import { Question } from '../Question';
import { Router } from '@angular/router';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css'],
})
export class QuestionsListComponent {
  title = 'quiz-app';
  public rightAnswersCount = 0;
  public questions = this.questionsService.questions;

  constructor(private router: Router, private questionsService: QuestionsService) {}


  public onAnswer(isRight: boolean) {
    if (isRight) {
      this.rightAnswersCount++;
    }
  }

  public goToResults() {
    this.router.navigate(['results'], {
      queryParams: {
        rightAnswersCount: this.rightAnswersCount,
        questionsLength: this.questions.length
      },
    });
  }
}
