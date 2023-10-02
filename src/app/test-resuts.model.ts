import { AnswerNames } from "./Question";

export interface TestResult {
    id: number;
    testId: number;
    results: Result[];
}

export interface Result {
    questionId: number;
    answer: AnswerNames;
    isRight: boolean;
}
