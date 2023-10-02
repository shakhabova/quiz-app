import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { AnswerNames, CorrectAnswers, Question } from '../Question';
import { Result } from '../test-resuts.model';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class QuestionComponent {
  @Input() public question!: Question;
  @Input() public result?: Result;
  @Output() public answered = new EventEmitter<Result>();

  onChange(answer: AnswerNames) {
    const correctKey = (answer + '_correct') as keyof CorrectAnswers;
    this.answered.emit({
      questionId: this.question.id,
      answer,
      isRight: this.question.correct_answers[correctKey] ?? false,
    });
  }

  // public getRadioButtonColor(answerName: AnswerNames): ThemePalette {

  // }
}
