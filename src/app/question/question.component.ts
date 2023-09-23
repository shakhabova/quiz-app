import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CorrectAnswers, Question } from '../Question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent {
  @Input() public question!: Question;
  @Output() public answered = new EventEmitter<boolean>();

  onChange(answer: string) {
    const correctKey = (answer + '_correct') as keyof CorrectAnswers;
    if (this.question.correct_answers[correctKey]) {
      this.answered.emit(true)
    } else {
      this.answered.emit(false);
    }
  }
}
