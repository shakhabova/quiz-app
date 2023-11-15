export interface Question {
  id: number;
  description: string;
  answers: Answers;
  multiple_correct_answers: boolean;
  correct_answers: CorrectAnswers;
}

export interface Answers {
  [AnswerNames.Answer_a]: string;
  [AnswerNames.Answer_b]: string;
  [AnswerNames.Answer_c]?: string;
  [AnswerNames.Answer_d]?: string;
  [AnswerNames.Answer_e]?: string;
  [AnswerNames.Answer_f]?: string;
}

export enum AnswerNames {
  Answer_a = 'answer_a',
  Answer_b = 'answer_b',
  Answer_c = 'answer_c',
  Answer_d = 'answer_d',
  Answer_e = 'answer_e',
  Answer_f = 'answer_f',
}

export interface CorrectAnswers {
  answer_a_correct: boolean;
  answer_b_correct: boolean;
  answer_c_correct?: boolean;
  answer_d_correct?: boolean;
  answer_e_correct?: boolean;
  answer_f_correct?: boolean;
}

export interface Test {
id: number;
name: string;
imageUrl?: string;
questions: Question [];
}