import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http:HttpClient) { }
  viewQuestion(Id)
  {
    console.log("getquestion answer called");
    return this.http.get("forum/viewques/"+Id);
  }
}
