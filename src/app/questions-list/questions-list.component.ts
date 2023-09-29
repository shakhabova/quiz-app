import { Component } from '@angular/core';
import { Question } from '../Question';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from '../questions.service';
import { Result } from '../test-resuts.model';
import { AnswersService } from '../answers.service';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css'],
})
export class QuestionsListComponent {
  title = 'quiz-app';
  public questions: Question[] = [];

  private testId!: number;
  private results: Result[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private questionsService: QuestionsService,
    private answersService: AnswersService
  ) {}

  ngOnInit() {
    this.testId = +(this.activatedRoute.snapshot.paramMap.get('testId') || 0);
    if (!this.testId) {
      throw new Error('testId must be declared');
    }

    const test = this.questionsService.getTest(+this.testId);
    if (!test) {
      throw new Error('test is not found');
    }
    this.questions = test.questions;
  }

  public onAnswer(result: Result) {
    const index = this.results.findIndex(
      (res) => res.questionId === result.questionId
    );
    if (index > -1) {
      this.results.splice(index, 1, result);
    } else {
      this.results.push(result);
    }
  }

  public goToResults() {
    const id = this.answersService.saveAnswers(this.testId, this.results);

    this.router.navigate(['results', id]);
  }
}
