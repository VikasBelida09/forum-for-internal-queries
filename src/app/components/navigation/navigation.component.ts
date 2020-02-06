import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SessionStorageService } from 'angular-web-storage';
import { SearchService } from 'src/app/providers/searchService/search.service';
import { QuestionService } from '../../providers/questionService/question.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public data: any = []
  public display = "none";
  categories = ["HR", "Technical Stack"]
  Technical = ['Java', 'Python', 'Spring-Boot', 'Angular',
    'React-Js', 'Sql', 'Others']
  Hr = ['Recruitment', 'Training', 'Compensation', 'Perks', 'Others']
  danger = "none"
  subcategories = []
  subcategory: string = ""
  category: string = "";
  questions: string = "";
  description: string = "";
  categorydisplay = "none";
  subcatId=0;
  private matchquestion: any = []
  constructor(public session: SessionStorageService,
    private router: Router,
    public searchservice: SearchService,
    public questionservice: QuestionService) {
    this.data[0] = this.session.get("1");


  }

  ngOnInit() {

  }
  question() {
    this.router.navigate(['/askquestion'])

  }
  questionclick(qId: number) {
    this.router.navigate(['/question/' + qId]).then(() => { window.location.reload(); })

  }

  searchquestion(qId: number) {

  }

  onSearchChange(searchValue: string): void {

    if (searchValue.length == 0) {
      this.display = "none";
    }
    else {
      this.searchservice.generateKeywords(searchValue).subscribe((search) => {
        this.matchquestion = search;
        console.log(this.matchquestion);

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
  homeredirect() {
    this.router.navigate(['/home'])

  }
  OncatChange(item: string) {
    console.log(item)
    if (item === "HR") {
      this.subcategories = this.Hr
      this.subcategory = this.Hr[0];
    }
    else {
      this.subcategories = this.Technical
      this.subcategory = this.Technical[0];
    }
  }
  OnsubcatChange(item:string)
  {
    this.subcategory = item
  }
  postquestion() {
    if (this.questions === "" || this.category === "" || this.subcategory === "" || this.description === "") {
      this.danger = "block";
    }
    else {
      this.danger = "none";

      if(this.category==="HR")
      {
        console.log("hello",this.category,this.Hr.indexOf(this.subcategory))
        if(this.subcategory==="Others")
        {
          this.subcatId=11

        }
        else{
        this.subcatId=this.Technical.length+this.Hr.indexOf(this.subcategory);
        }
      }
      else{
        if(this.subcategory==="Others")
        {
          this.subcatId=11

        }
        else{
          this.subcatId=1+this.Technical.indexOf(this.subcategory);
        }
      }
      console.log(this.subcatId)
      this.questionservice.addQuestion(1, this.questions, 0, this.description, this.subcatId, this.session.get("1").empId).subscribe((res) => {
        this.router.navigate(['/home']).then(()=>{
          this.questions = "";
          this.category = "";
          this.subcategory = "";
          this.description = "";
          window.location.reload();
        })
        
      });
    }
  }

  categoryselect(id: number) {
    console.log(id);
    this.categorydisplay = "none";
    this.router.navigate(["viewcategory/" + id]).then(() => {
      window.location.reload();
    })
  }
  viewprofile() {
    this.router.navigate(["profile"]);
  }
  opendropdown() {
    if (this.categorydisplay === "none") {
      this.categorydisplay = "block";

    }
    else {
      this.categorydisplay = "none"
    }

  }
}
