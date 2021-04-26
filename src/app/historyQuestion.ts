import { Question } from "./question";

export interface HistoryQuestion extends Question {
    userAnswer: number;
    correct: boolean;
  }