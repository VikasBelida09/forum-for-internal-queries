import { Component, OnInit } from '@angular/core';
import {AuthService,SocialUser,GoogleLoginProvider} from 'angular5-social-login';
import {  Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './modelcontent.html'
})
export class NgbdModalContent {
  title = 'Acco';
  public user: any =SocialUser;
  @Input() name;
  constructor(public activeModal: NgbActiveModal,private socialAuthService: AuthService) {}
  googlelogin(){
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData)=>{
      this.user=userData;
      console.log(this.user.image);
    });
 }
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  constructor(private modalService: NgbModal) {}

  
  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    console.log("hi");
    modalRef.componentInstance.name = 'World';
  }
}
