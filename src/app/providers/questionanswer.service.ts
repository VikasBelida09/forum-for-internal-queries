import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionanswerService {
  constructor(private http:HttpClient) { }
  
  getQuestionanswerById(Id)
  {
    console.log("getquestion answer called");
    return this.http.get("forum/questions/"+Id);
  }
  upvote(qId:number,empId:number,vote:number)
  {
    return this.http.post("forum/Questions/vote",{
    qId:qId,
    empId:empId,
    vote:vote
    });
  }
  downvote(qId:number,empId:number,vote:number)
  {
    return this.http.post("forum/Questions/vote",{
    qId:qId,
    empId:empId,
    vote:vote
    });
  }
  saveanswer()
  {

  }
}
