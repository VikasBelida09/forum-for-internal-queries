import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SessionStorageService } from 'angular-web-storage';
import { SearchService } from 'src/app/providers/searchService/search.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public data: any = []
  private display = "none";
  private questions = ["what is java?", "what is angular?", "how to install jdk?", "why python is used?", "why python flask?","difference between java and java8"]
  private matchquestion=[]
  constructor(public session: SessionStorageService,
    private router: Router,
    public searchservice:SearchService) {
    this.data[0] = this.session.get("1");
  }

  ngOnInit() {

  }
  question() {
    this.router.navigate(['/askquestion'])

  }
  questionclick(question:string)
  {
    console.log(question)
  }

  onSearchChange(searchValue: string): void {

    if (searchValue.length == 0) {
      this.display = "none";
    }
    else {
      this.searchservice.generateKeywords(searchValue).subscribe((search) => {
        this.matchquestion=[]
        for(let keyword of search['keywords'])
        {
          for(let ques of this.questions)
          {
            console.log( ques )
            if(ques.includes(keyword))
            {
              this.matchquestion.push(ques)
            }
          }
        }
  
      });
      this.display = "block";
    }
    console.log(searchValue);
  }

  logout() {
    this.session.remove("1");
    this.data[0] = this.session.get("1");
    this.session.set("3", true);
    console.log(this.data)
    this.router.navigate(['/'])
  }
  homeredirect()
  {
    this.router.navigate(['/home'])

  }
}
