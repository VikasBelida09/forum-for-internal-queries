import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent,NgbdModalContent } from './components/indexpage/index/index.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SocialLoginModule, AuthServiceConfig,GoogleLoginProvider} from 'angular5-social-login';
import { QuestionComponent } from './components/question/question/question.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
const config=new AuthServiceConfig([
  {
     id:GoogleLoginProvider.PROVIDER_ID,
     provider: new GoogleLoginProvider('461123909427-jm7brsvd2fijajbeq9btm44259biegjl.apps.googleusercontent.com') 
  }
  ]);
  export function provideConfig(){
    
    return config;
  }
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NgbdModalContent,
    QuestionComponent,
    NavigationComponent,
    ],
      entryComponents: [NgbdModalContent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    SocialLoginModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide:AuthServiceConfig, 
      useFactory:provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
