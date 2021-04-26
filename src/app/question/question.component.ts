import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { HistoryQuestion } from '../historyQuestion';
import { QuestionService } from '../question.service';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  question: Question = this.questionService.getQuestion();
  extendedQuestion!: HistoryQuestion;
  rightAnswer: number = 0;
  userAnswer: number = 0;
  tempAnwer: number = 0;
  checkAnswer(): number {
    this.rightAnswer = this.question.terms.reduce((totalValue, currentValue) => totalValue + currentValue);
    this.extendedQuestion = Object.assign(this.question, { userAnswer: this.userAnswer , correct: this.rightAnswer === this.userAnswer});
    this.historyService.add(this.extendedQuestion);
    this.question = this.questionService.getQuestion();
    (document.getElementById('userAnswer') as HTMLInputElement).select();
    this.tempAnwer = this.userAnswer;
    return this.rightAnswer;
  }

  constructor(private questionService: QuestionService, private historyService: HistoryService) { }

  ngOnInit(): void {
  }

}
