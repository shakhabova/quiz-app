export interface Question {
  id: number;
  description: string;
  answers: Answers;
  multiple_correct_answers: boolean;
  correct_answers: CorrectAnswers;
}

export interface Answers {
  answer_a: string;
  answer_b: string;
  answer_c?: string;
  answer_d?: string;
  answer_e?: string;
  answer_f?: string;
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
imageUrl: string;
questions: Question [];
}