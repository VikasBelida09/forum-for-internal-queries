import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs'
import {startsWithPipe} from '../../customstart.pipes'
import{Question} from '../../Models/Question'
import {QuestionService} from '../../providers/questionService/question.service'
import { CompileShallowModuleMetadata } from '@angular/compiler';
@Component({
  selector: 'app-askquestion',
  templateUrl: './askquestion.component.html',
  styleUrls: ['./askquestion.component.css']
})
export class AskquestionComponent implements OnInit {
  
  constructor(private questionservice: QuestionService){}
  data=['Java','C','Cpp','Python','Spring-Boot','Angular','React-Js','React-Native','Kafka','Sql','Mysql','MongoDb','c#','HTML','JavaScript','CSS','HR']
   AskQuestionForm=new FormGroup({
     question: new FormControl('',[Validators.required]),
     description:new FormControl('',[Validators.required]),
     Tags:new FormControl('',[Validators.required])
   })
   private question: Question
   
  additem(item){
      this.AskQuestionForm.patchValue({Tags:item})
  }
  status=false;
  isQuestionset=false;
  onSubmit(){
    if(this.AskQuestionForm.value.question && this.AskQuestionForm.value.description && this.AskQuestionForm.value.Tags){
      this.question =new Question(this.AskQuestionForm.value.question,this.AskQuestionForm.value.description,this.AskQuestionForm.value.Tags);
      this.isQuestionset=true;
      this.status=false;
    }
    else{
      this.status=true;
    }
    if(this.isQuestionset){
      console.log("sending....");
      this.questionservice.addQuestion(1,this.AskQuestionForm.value.question, 0,this.AskQuestionForm.value.description,this.data.indexOf(this.AskQuestionForm.value.Tags)+1,321).subscribe();
    }
  }
  ngOnInit() {
   
  }

}
