import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CategoryComponent implements OnInit {
  techsubcategory=['Java','C','Cpp','Python','Spring-Boot','Angular',
  'React-Js','React-Native','Kafka','Sql','Mysql','MongoDb',
  'c#','HTML','JavaScript','CSS']
  hrsubcategory=['Recruitment','Training','Compensation','Perks']
  category=""
  subcategories=[]
  data=[]
  background=[]
  color=[]
  constructor() { }

  ngOnInit() {
  }
  hrcategory()
  {
    this.category="HR"
    this.color=[];
    this.background=[];
    this.subcategories=[]
    this.data=this.hrsubcategory

  }
  techcategory()
  {
    this.category="Technical Stack"
    this.color=[];
    this.background=[];
    this.subcategories=[]
    this.data=this.techsubcategory
  }
  subcategory(item:string,i:number)
  {
    if(this.subcategories.includes(item))
    {
       this.subcategories.splice(this.subcategories.indexOf(item));
       this.color[i]="";
       this.background[i]="";
    }
    else
    {
      this.subcategories.push(item);
      this.color[i]="white";
      this.background[i]="#03cafc";
    }
  }
}
