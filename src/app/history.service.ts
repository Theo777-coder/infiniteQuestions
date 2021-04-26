import { Injectable } from '@angular/core';
import { Question } from './question';
import { HistoryQuestion } from './historyQuestion';


@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  questions: HistoryQuestion[] = [];

  add(question: HistoryQuestion) {
    this.questions.push(question);
  }
  
  clear() {
    this.questions = [];
  }

  constructor() { }
}
