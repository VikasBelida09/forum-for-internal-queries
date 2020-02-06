import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient){ }
  generateKeywords(question:string){
      return  this.http.post('forum/tokenizer',{"q":question});
  }
}
