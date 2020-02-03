import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser, GoogleLoginProvider } from 'angular5-social-login';
import { Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {  SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './modelcontent.html'
})
export class NgbdModalContent {
  title = 'Acco';
  public user: any = SocialUser;
  public data: any = []
  @Input() name;
  constructor(public session: SessionStorageService,
    private router: Router,
    public activeModal: NgbActiveModal,
    private socialAuthService: AuthService) { }


  googlelogin() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData) => {
      this.user = userData;
      this.session.set("1", userData);

      this.data[0] = this.session.get("1");
      console.log(this.data);
      if (this.data[0]) {
        this.activeModal.close('Close click')
        this.router.navigate(['/question'])
      }

    });
  }
}
@Component({
  selector: 'app-indexnavigation',
  templateUrl: './indexnavigation.component.html',
  styleUrls: ['./indexnavigation.component.css']
})
export class IndexnavigationComponent{

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    console.log("hi");
    modalRef.componentInstance.name = 'World';
  }
}




