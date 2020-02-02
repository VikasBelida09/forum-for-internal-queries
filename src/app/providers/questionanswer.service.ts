import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionanswerService {
  Id : Number
  constructor(private http:HttpClient) { }
  
  getQuestionanswerById(Id)
  {
    console.log("getquestion answer called");
    return this.http.get("forum/questions/1")
  }

  saveanswer()
  {

  }
}
