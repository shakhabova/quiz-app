import { Injectable } from '@angular/core';
import { Question, Test } from './Question';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  public tests: Test[] = [
    {
      id: 1,
      name: 'Present Simple',
      imageUrl: '/assets/present_simple.jpg',
      questions: [
        {
          id: 1,
          description: 'It`s a great movie. I have ... tha movie many times',
          multiple_correct_answers: true,
          answers: {
            answer_a: 'saw',
            answer_b: 'seen',
            answer_c: 'see',
            answer_d: 'sees',
          },
          correct_answers: {
            answer_a_correct: false,
            answer_b_correct: true,
            answer_c_correct: false,
            answer_d_correct: false,
          },
        },
        {
          id: 2,
          description: 'Have you ... really strange or interesting food',
          multiple_correct_answers: false,
          answers: {
            answer_a: 'ever eaten',
            answer_b: 'never eaten',
            answer_c: 'ate',
          },
          correct_answers: {
            answer_a_correct: true,
            answer_b_correct: false,
            answer_c_correct: false,
          },
        },
        {
          id: 3,
          description: '... your brother talked to you yet? Yes, he ...',
          multiple_correct_answers: false,
          answers: {
            answer_a: 'Has/did',
            answer_b: 'Have/have',
            answer_c: 'Has/has',
          },
          correct_answers: {
            answer_a_correct: false,
            answer_b_correct: false,
            answer_c_correct: true,
          },
        },
      ],
    },
    {
      id: 2,
      name: 'Past Simple',
      imageUrl: '/assets/past.jpg',
      questions: [
        {
          id: 4,
          description: 'They ... last summer',
          multiple_correct_answers: true,
          answers: {
            answer_a: 'didn`t met',
            answer_b: 'didn`t meeted',
            answer_c: 'didn`t meet',
          },
          correct_answers: {
            answer_a_correct: false,
            answer_b_correct: false,
            answer_c_correct: true,
          },
        },
        {
          id: 5,
          description: 'What ... you ... last weekend',
          multiple_correct_answers: false,
          answers: {
            answer_a: 'did do',
            answer_b: 'did did',
            answer_c: 'was do',
          },
          correct_answers: {
            answer_a_correct: true,
            answer_b_correct: false,
            answer_c_correct: false,
          },
        },
        {
          id: 6,
          description: 'Martin ... in 2005',
          multiple_correct_answers: false,
          answers: {
            answer_a: 'was born',
            answer_b: 'were born',
            answer_c: 'born',
          },
          correct_answers: {
            answer_a_correct: true,
            answer_b_correct: false,
            answer_c_correct: false,
          },
        },
      ],
    },
  ];
  constructor() {}

  public getTest(testId: number): Test | undefined {
    return this.tests.find((test) => test.id === testId);
  }
}
