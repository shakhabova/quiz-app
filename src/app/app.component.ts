import { Component } from '@angular/core';
import { Question } from './Question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'quiz-app';
   public rightAnswersCount = 0;

  public questions: Question[] = [
    {
      id: 1,
      description: 'Your favorite season is',
      multiple_correct_answers: true,
      answers: {
        answer_a: 'Summer',
        answer_b: 'Winter',
        answer_c: 'Spring',
        answer_d: 'Autumn'
      },
      correct_answers: {
        answer_a_correct: false,
        answer_b_correct: false,
        answer_c_correct: true,
        answer_d_correct: true
      }
    },
    {
      id: 2,
      description: 'Your favorite food is',
      multiple_correct_answers: false,
      answers: {
        answer_a: 'Pizza',
        answer_b: 'Soup',
        answer_c: 'Meat'
      },
      correct_answers:{
        answer_a_correct: true,
        answer_b_correct: false,
        answer_c_correct: false,
        
      }
    },]
  

public onAnswer(isRight: boolean) {
  if(isRight){
  this.rightAnswersCount++;
  }
}
}
