import { Component, OnInit } from '@angular/core';
import { QuestionanswerService } from 'src/app/providers/questionanswer.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  AnswerForm=new FormGroup(
    {
      description: new FormControl("")
    }
  )
  question_answer=[]
  upvotecolor="black"
  downvotecolor="black"
  answerupvotecolor=[]
  answerdownvotecolor="black"
  vote: number
  answervote:number
  constructor(public questionanswerservice:QuestionanswerService) {
    this.vote=0;
    this.answervote=0;

  this.questionanswerservice.getQuestionanswerById(1).subscribe((details)=>{
      this.question_answer.push(details);
      console.log(this.question_answer[0])

    });
   
   }

  ngOnInit() {
  }
  upvote()
  {
    this.vote+=1;
    this.upvotecolor="orange"
    this.downvotecolor="black"

  }
  downvote()
  {
    this.vote-=2;
    this.downvotecolor="orange"
    this.upvotecolor="black"
  }
  answerupvote(id: number)
  {    
    console.log(id) 
    this.answervote+=1;
    this.answerupvotecolor[id]="orange"
    this.answerdownvotecolor="black"

  }
  answerdownvote()
  {
    this.answervote-=2;
    this.answerdownvotecolor="orange"
    //this.answerupvotecolor="black"

  }
  
}
