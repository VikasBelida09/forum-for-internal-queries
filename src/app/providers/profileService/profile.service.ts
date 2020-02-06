import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http:HttpClient) { }

  getProfile(Id:number)
  {
    return this.http.get("forum/profile/"+Id);
  }
}
