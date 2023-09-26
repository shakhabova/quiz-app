import { Component, OnInit } from '@angular/core';
import { Question, Test } from '../Question';
import { Router } from '@angular/router';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-tests-list',
  templateUrl: './tests-list.component.html',
  styleUrls: ['./tests-list.component.css'],
})
export class TestsListComponent implements OnInit {
  public tests: Test[] = [];

  constructor(
    private router: Router,
    private questionsService: QuestionsService
  ) {}

  ngOnInit() {
    this.tests = this.questionsService.tests;
  }

  public startTest(testId: number) {
    this.router.navigate(['questions', testId]);
  }
}
