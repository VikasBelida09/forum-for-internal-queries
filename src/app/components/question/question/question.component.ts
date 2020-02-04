import { Component, OnInit } from '@angular/core';
import { QuestionanswerService } from 'src/app/providers/questionanswer.service';
import { FormGroup, FormControl } from '@angular/forms';
import {  SessionStorageService } from 'angular-web-storage';
import { AnswerService } from 'src/app/providers/answerService/answer.service';

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
    public questionanswerservice: QuestionanswerService,
    public answerservice:AnswerService) {

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
  upvote(id:number) {
    this.questionanswerservice.upvote(id,2,1).subscribe((vote) => {
      this.question_answer[0].vote=vote;

    });
    this.upvotecolor = "orange"
    this.downvotecolor = "black"

  }
  downvote(id:number) {
    this.questionanswerservice.downvote(id,2,-1).subscribe((vote) => {
      this.question_answer[0].vote=vote;

    });
    this.downvotecolor = "orange"
    this.upvotecolor = "black"
  }
  answerupvote(id: number, ansid: number) {
    console.log(id, ansid)
    this.answerupvotecolor[id] = "orange"
    this.answerdownvotecolor[id] = "black"

  }
  answerdownvote(id: number, ansid: number) {
    console.log(id, ansid)
    this.answerdownvotecolor[id] = "orange"
    this.answerupvotecolor[id] = "black"

  }
  onSubmit(qid)
  {
    console.log(qid);
    this.answerservice.addAnswer(6,this.AnswerForm.value.description,qid,1).subscribe((details) => {
      this.question_answer[0].answerList=details;
      console.log("question answer",this.question_answer)

    });
    console.log("clicked");
  }
}

