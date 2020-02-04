import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient){ }
  addQuestion(questionId:number,questionValue:string,vote:number,description:string,subcatId:number,empId:number,file:File){
    const formData: FormData = new FormData();
    formData.append('fileKey', file, file.name);
      return  this.http.post('forum/viewques/addquestion',{
          qId:questionId,
          questionValue:questionValue,
          vote:vote,
          description:description,
          subcatId:subcatId,
          empId:empId,
          file:formData
      })                                 
  }
}
