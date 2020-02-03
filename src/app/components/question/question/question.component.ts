import { Component, OnInit } from '@angular/core';
import { QuestionanswerService } from 'src/app/providers/questionanswer.service';
import { FormGroup, FormControl } from '@angular/forms';
import {  SessionStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  AnswerForm = new FormGroup(
    {
      description: new FormControl("")
    }
  )
  question_answer = []
  upvotecolor = "black"
  downvotecolor = "black"
  answerupvotecolor = []
  answerdownvotecolor = []
  vote: number
  answervote: number
  public data: any = []
  constructor(public session: SessionStorageService,
    public questionanswerservice: QuestionanswerService) {
    this.vote = 0;
    this.answervote = 0;
    this.data[0] = this.session.get("1");
    console.log("question",this.data[0]);
    this.questionanswerservice.getQuestionanswerById(1).subscribe((details) => {
      this.question_answer.push(details);
      console.log("question answer",this.question_answer)

    });

  }

  ngOnInit() {
  }
  upvote() {
    this.vote += 1;
    this.upvotecolor = "orange"
    this.downvotecolor = "black"

  }
  downvote() {
    this.vote -= 2;
    this.downvotecolor = "orange"
    this.upvotecolor = "black"
  }
  answerupvote(id: number, ansid: number) {
    console.log(id, ansid)
    this.answervote += 1;
    this.answerupvotecolor[id] = "orange"
    this.answerdownvotecolor[id] = "black"

  }
  answerdownvote(id: number, ansid: number) {
    console.log(id, ansid)
    this.answervote -= 2;
    this.answerdownvotecolor[id] = "orange"
    this.answerupvotecolor[id] = "black"

  }

}

