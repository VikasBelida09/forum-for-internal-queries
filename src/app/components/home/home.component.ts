import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/providers/homeService/home.service';
import {  SessionStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  questions=[]
  
  constructor(public session: SessionStorageService,
    private router: Router,
     public homeservice:HomeService) { 
      this.homeservice.viewQuestion(1).subscribe((details) => {
        this.questions.push(details);
        console.log("question answer",this.questions[0])
  
      });

     }

  ngOnInit() {
    if(this.session.get("2"))
    {
      this.session.set("2",false);
      window.location.reload();
    }
  }
  viewquestion()
  {
    this.router.navigate(['/question'])
  }
}
