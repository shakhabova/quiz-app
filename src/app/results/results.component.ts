import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnswersService } from '../answers.service';
import { Result } from '../test-resuts.model';
import { QuestionsService } from '../questions.service';
import { Question } from '../Question';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  public value!: number;
  public rightAnswersCount!: number;
  public questionsLength!: number;
  public results: Result[] = [];
  public questions: Question[] = [];

  private testResultsId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private answersService: AnswersService,
    private questionsService: QuestionsService
  ) {}

  ngOnInit() {
    this.testResultsId = +(
      this.activatedRoute.snapshot.paramMap.get('testResultsId') || 0
    );
    if (!this.testResultsId) {
      throw new Error('testResultsId must be declared');
    }
    const testResults = this.answersService.getTestResult(this.testResultsId);
    if (!testResults) {
      throw new Error('test result not found');
    }
    
    const test = this.questionsService.getTest(testResults.testId);
    if (!test) {
      throw new Error('test is not found');
    }
    this.questions = test.questions;
  
    this.results = testResults.results;

    this.rightAnswersCount = testResults.results.filter(
      (res) => res.isRight
    ).length;
    this.questionsLength = testResults.results.length;
    this.value = (this.rightAnswersCount / this.questionsLength) * 100;
  }
  getResult(questionId: number): Result {
    return this.results.find(result => result.questionId === questionId)!;
  }
}
