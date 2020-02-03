import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './components/question/question/question.component';
import { IndexComponent } from './components/indexpage/index/index.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { SessionService } from './providers/sessionService/session.service'
import { AskquestionComponent } from './components/askquestion/askquestion.component';
const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'askquestion', component: AskquestionComponent },
  { path: 'home', component: HomeComponent, resolve: { message: SessionService } },
  { path: '**', component: IndexComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    SessionService
  ]
})
export class AppRoutingModule { }
