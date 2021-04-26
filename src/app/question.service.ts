import { Injectable } from '@angular/core';
import { Question } from './question';
import { HistoryService } from './history.service';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  question!: Question;
  getQuestion(): Question {
    this.question = {
      id: 1,
      type: "adition",
      noOfTerms: 3,
      terms: [this.getRandomNumber(), this.getRandomNumber(), this.getRandomNumber()]
    }
    return this.question;
  }

  getRandomNumber(): number{
    return Math.floor((Math.random() * 10) + 1);
  }
  
  constructor(private historyService: HistoryService) { }
}
