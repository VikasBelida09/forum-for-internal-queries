import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/indexpage/index/index.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SocialLoginModule, AuthServiceConfig,GoogleLoginProvider} from 'angular5-social-login';
import { NavigationComponent } from './components/navigation/navigation.component';
import { QuestionComponent } from './components/question/question/question.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AngularWebStorageModule } from 'angular-web-storage';
import { HomeComponent } from './components/home/home.component';
import { IndexnavigationComponent } from './components/indexnavigation/indexnavigation.component';
import {NgbdModalContent } from './components/indexnavigation/indexnavigation.component';
import { AskquestionComponent } from './components/askquestion/askquestion.component';
import { startsWithPipe } from './customstart.pipes';
import { CategoryComponent } from './components/category/category.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ViewcategoryComponent } from './components/viewcategory/viewcategory.component';

const config=new AuthServiceConfig([
  {
     id:GoogleLoginProvider.PROVIDER_ID,
     provider: new GoogleLoginProvider('461123909427-m0rth5hk8qnidbjkkkaajmp2gka3715o.apps.googleusercontent.com') 
  }
  ]);
  export function provideConfig(){
    
    return config;
  }
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavigationComponent,
    NgbdModalContent,
    QuestionComponent,
    HomeComponent,
    IndexnavigationComponent,
    AskquestionComponent,
    startsWithPipe,
    CategoryComponent,
    NotfoundComponent,
    ChatbotComponent,
    ProfileComponent,
    ViewcategoryComponent
    ],
      entryComponents: [NgbdModalContent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    SocialLoginModule,
    FormsModule,
    ReactiveFormsModule,
    AngularWebStorageModule,
    
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
