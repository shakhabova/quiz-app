import { Injectable } from '@angular/core';
import { Result, TestResult } from './test-resuts.model';

@Injectable({
  providedIn: 'root',
})
export class AnswersService {
  private testResults: TestResult[] = [];

  constructor() {}

  public saveAnswers(testId: number, results: Result[]): number {
    const id = new Date().getTime();
    this.testResults.push({
      id,
      testId,
      results,
    });

    return id;
  }

  public getTestResult(id: number): TestResult | undefined {
    return this.testResults.find((testResult) => testResult.id === id);
  }
}
