import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
addUser(empId:number,name:string,email:string,profilepic:string,idToken:string){
       return this.http.post('forum/home/addEmployee',{
         emp_id:empId,
         name:name,
         email:email,
         profilepic:profilepic,
         idToken:idToken
       })
}
}

