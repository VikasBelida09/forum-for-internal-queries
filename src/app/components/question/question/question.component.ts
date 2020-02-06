import { Component, OnInit } from '@angular/core';
import { QuestionanswerService } from 'src/app/providers/questionanswer.service';
import { FormGroup, FormControl } from '@angular/forms';
import { SessionStorageService } from 'angular-web-storage';
import { AnswerService } from 'src/app/providers/answerService/answer.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

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
  commentForm = new FormGroup(
    {
      replies: new FormControl("")
    }
  )
  display = []
  question_answer = []
  upvotecolor = "black"
  downvotecolor = "black"
  answerupvotecolor = []
  answerdownvotecolor = []
  vote: number
  answervote: number
  textareadisplay = [];
  commentdisplay = [];
  answerareadisplay = [];
  textanswerarea = [];
  answerdisplay = [];
  commentedit = [];
  questionid: any;
  editdisplay = [];
  public data: any = [];
  commenteditdisplay=[];
  constructor(public session: SessionStorageService,
    public questionanswerservice: QuestionanswerService,
    public answerservice: AnswerService,
    private router: Router,
    private route: ActivatedRoute) {
    this.vote = 0;
    this.answervote = 0;
    this.data[0] = this.session.get("1");

    console.log("question", this.data[0]);
    this.route.paramMap.subscribe(paramMap => {
      this.questionid = paramMap.get('qId');
    })
    this.questionanswerservice.getQuestionanswerById(this.questionid).subscribe((details) => {
      this.question_answer.push(details);
      console.log("question answer", this.question_answer[0])

      for (let question of this.question_answer[0].answerList) {
        if (question.empId === this.session.get("1").empId) {
          this.editdisplay[question.empId] = "block"
        }
        else {
          this.editdisplay[question.empId] = "none"
        }
        this.answerareadisplay[question.answerId] = "none";
        this.answerdisplay[question.answerId] = "flex";
        for (let comment of question.listComments) {
          if (comment.empId === this.session.get("1").empId) {
            this.commenteditdisplay[comment.empId] = "block"
          }
          else {
            this.commenteditdisplay[comment.empId] = "none"
          }

          this.textareadisplay[comment.commentId] = "none";
          this.commentdisplay[comment.commentId] = "flex";
        }

      }

    });
    if (!this.question_answer) {
      this.router.navigate(['/notfound'])
    }
  }

  ngOnInit() {
    this.display.fill("none");

  }
  upvote(id: number) {
    this.questionanswerservice.upvote(id, this.session.get("1").empId, 1).subscribe((vote) => {
      this.question_answer[0].vote = vote;

    });
    this.upvotecolor = "orange"
    this.downvotecolor = "black"

  }
  downvote(id: number) {
    this.questionanswerservice.downvote(id, this.session.get("1").empId, -1).subscribe((vote) => {
      this.question_answer[0].vote = vote;

    });
    this.downvotecolor = "orange"
    this.upvotecolor = "black"
  }
  answerupvote(id: number, ansid: number) {
    this.questionanswerservice.upanswervote(ansid, this.session.get("1").empId, 1).subscribe((vote) => {
      this.question_answer[0].answerList[id].vote = vote;

    });
    this.answerupvotecolor[id] = "orange"
    this.answerdownvotecolor[id] = "black"

  }
  answerdownvote(id: number, ansid: number) {
    this.questionanswerservice.upanswervote(ansid, this.session.get("1").empId, -1).subscribe((vote) => {
      this.question_answer[0].answerList[id].vote = vote;

    });
    this.answerdownvotecolor[id] = "orange"
    this.answerupvotecolor[id] = "black"

  }
  onSubmit(qid) {
    console.log(qid);
    this.answerservice.addAnswer(6, this.AnswerForm.value.description, qid, this.data[0].empId).subscribe((details) => {
      this.question_answer[0].answerList = details;
      console.log("question answer", this.question_answer)
      for (let question of this.question_answer[0].answerList) {
        this.answerareadisplay[question.answerId] = "none";
        this.answerdisplay[question.answerId] = "flex";

      }

    });
    console.log("clicked");
  }
  showcomment(id: number) {
    if (this.display[id] === "none" || this.display[id] == undefined) {
      this.display[id] = "block";
    }
    else {
      this.display[id] = "none";
    }
  }
  onReply(answerId: number, index: number) {
    console.log(answerId, index);
    this.answerservice.addComments(this.data[0].empId, answerId, this.commentForm.value.replies).subscribe((comment) => {

      this.question_answer[0].answerList[index].listComments = comment;
      console.log("question answer", this.question_answer)
      this.display[index] = "none";
      for (let question of this.question_answer[0].answerList) {
        for (let comment of question.listComments) {
          this.textareadisplay[comment.commentId] = "none";
          this.commentdisplay[comment.commentId] = "flex";
        }

      }


    });
  }

  editcomment(index: number, comment: String) {
    this.commentedit[index] = comment;
    this.textareadisplay[index] = "block";
    this.commentdisplay[index] = "none";

  }
  sendanswer(answerId: number, answerValue: String) {
    console.log(answerId);
    this.textanswerarea[answerId] = answerValue;
    this.answerareadisplay[answerId] = "block";
    this.answerdisplay[answerId] = "none";

  }
  sendcomment(commentId: number, answerId: number, commentValue: String) {
    console.log(commentId, this.commentedit[commentId], commentValue)
    this.questionanswerservice.changecomment(commentId, this.commentedit[commentId]).subscribe(() => {

      commentValue = this.commentedit[commentId];
      window.location.reload();


    });

  }
  editanswer(answerId: number) {
    this.questionanswerservice.changeanswer(answerId, this.textanswerarea[answerId]).subscribe(() => {
      for (let answer of this.question_answer[0].answerList) {
        if (answer.answerId == answerId) {
          answer.answerValue = this.textanswerarea[answerId];
          this.textanswerarea[answerId] = "";
          this.answerareadisplay[answerId] = "none";
          this.answerdisplay[answerId] = "flex";
        }
      }
    });

  }


}

