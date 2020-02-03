import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/providers/homeService/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  questions=[]
  constructor(private router: Router,
     public homeservice:HomeService) { 
      this.homeservice.viewQuestion(1).subscribe((details) => {
        this.questions.push(details);
        console.log("question answer",this.questions[0])
  
      });
     }

  ngOnInit() {

  }
  viewquestion()
  {
    this.router.navigate(['/question'])
  }
}
