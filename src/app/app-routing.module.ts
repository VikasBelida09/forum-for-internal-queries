import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './components/question/question/question.component';
import { IndexComponent } from './components/indexpage/index/index.component';

const routes: Routes = [
  { path:'',    component:IndexComponent},  
  { path: 'question', component: QuestionComponent },
  { path: '**', component: IndexComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
