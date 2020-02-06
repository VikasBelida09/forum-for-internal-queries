import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ChatbotService } from '../../providers/chatbotService/chatbot.service'

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class ChatbotComponent implements OnInit {
  msg:String;
  userchat:String ='<div style="background-color: aqua;margin-left: 20px;word-break: break-word;margin-right: 20px;margin-top: 20px;margin-bottom: 20px;" class="media border p-3 user"><div class="media-body"><p>Lorem ipsum...</p></div><img class="usrimage" src="../../../assets/images/avatar1.png" alt="John Doe" class="ml-3 mt-3 rounded-circle" style="width:60px;"> </div>'
  dishachat:String ='<div class="media border p-3 disha"><img class="dishaimage" src="../../../assets/images/sofybot.png" alt="John Doe" class="mr-3 mt-3 rounded-circle" style="width:60px;"> <div class="media-body"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div></div>'
  chat:String="";
  envdisplay="block";
  botdisplay="none";
  startdisha="Hi there! :) . Welcome to Accoflow.I am Disha. We love having you with us. I can help you with several queries you have."
  constructor(private chatbotservice:ChatbotService) { 
    this.chat+='<div class="media border p-3 disha"><img class="dishaimage" src="../../../assets/images/sofybot.png" alt="John Doe" class="mr-3 mt-3 rounded-circle" style="width:60px;"> <div class="media-body"><p>'+this.startdisha+'</p></div></div>';

  }

  ngOnInit() {

  }
  sendValues()
  {
    this.chat+='<div style="background-color: aqua;margin-left: 20px;word-break: break-word;margin-right: 20px;margin-top: 20px;margin-bottom: 20px;" class="media border p-3 user"><div class="media-body"><p>'+this.msg+'</p></div><img class="usrimage" src="../../../assets/images/avatar1.png" alt="John Doe" class="ml-3 mt-3 rounded-circle" style="width:60px;"> </div>'
    this.chatbotservice.askdisha(this.msg).subscribe((response)=>
    {
      this.chat+='<div class="media border p-3 disha"><img class="dishaimage" src="../../../assets/images/sofybot.png" alt="John Doe" class="mr-3 mt-3 rounded-circle" style="width:60px;"> <div class="media-body"><p>'+response['q']+'</p></div></div>';

    })
    

    console.log(this.msg)
  }
  changedisplay(displaybool:boolean)
  {
    if(displaybool)
    {
      this.envdisplay="none";
      this.botdisplay="block";
    }
    else{
        this.envdisplay="block";
        this.botdisplay="none";
    }

  }

}
