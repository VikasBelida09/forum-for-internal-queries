import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  constructor(private http:HttpClient) { }

  askdisha(question:String)
  {
    return this.http.post("forum/chatbot",{
      q:question
    });
  }

}
