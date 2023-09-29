import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnswersService } from '../answers.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  public value!: number;
  public rightAnswersCount!: number;
  public questionsLength!: number;

  private testResultsId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private answersService: AnswersService
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

    this.rightAnswersCount = testResults.results.filter(
      (res) => res.isRight
    ).length;
    this.questionsLength = testResults.results.length;
    this.value = (this.rightAnswersCount / this.questionsLength) * 100;
  }
}
