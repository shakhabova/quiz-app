import { Component } from '@angular/core';
import { Question } from '../Question';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css'],
})
export class QuestionsListComponent {
  title = 'quiz-app';
  public rightAnswersCount = 0;
  public questions: Question[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private questionsService: QuestionsService
  ) {}

  ngOnInit() {
    const testId = this.activatedRoute.snapshot.paramMap.get('testId');
    if (!testId) {
      throw new Error('testId must be declared');
    }

    const test = this.questionsService.getTest(+testId);
    if (!test) {
      throw new Error('test is not found');
    }
    this.questions = test.questions;
  }

  public onAnswer(isRight: boolean) {
    if (isRight) {
      this.rightAnswersCount++;
    }
  }

  public goToResults() {
    this.router.navigate(['results'], {
      queryParams: {
        rightAnswersCount: this.rightAnswersCount,
        questionsLength: this.questions.length,
      },
    });
  }
}
