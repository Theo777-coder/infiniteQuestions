import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  question: Question = {
    id: 1,
    type: "adition",
    noOfTerms: 3,
    terms: [this.getRandomNumber(), this.getRandomNumber(), this.getRandomNumber()]
  }
  
  rightAnswer: number = 0;
  userAnswer: number = 0;
  tempAnwer: number = 0;
  checkAnswer(): number {
    this.rightAnswer = this.question.terms.reduce((totalValue, currentValue) => totalValue + currentValue);
    this.genereateNewQuestion();
    (document.getElementById('userAnswer') as HTMLInputElement).select();
    this.tempAnwer = this.userAnswer;
    return this.rightAnswer;
  }

  genereateNewQuestion(): Question{
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
  constructor() { }

  ngOnInit(): void {
  }

}
