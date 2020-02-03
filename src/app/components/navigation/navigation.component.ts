import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {  SessionStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public data: any = []
  constructor (public session: SessionStorageService,
    private router: Router)
    {
      this.data[0]=this.session.get("1");
    }

  ngOnInit() {
  }
  question()
  {
    this.router.navigate(['/'])

  }
  logout()
  {
    this.session.remove("1");
    this.data[0]=this.session.get("1");
    console.log(this.data)
    this.router.navigate(['/'])
  }
}
