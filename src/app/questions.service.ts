import { Injectable } from '@angular/core';
import { Question } from './Question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  
  public questions: Question[] = [
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
    
  ];
  constructor() { }
}
