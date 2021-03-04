import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { ScorePageComponent } from './score-page/score-page.component';



const routes: Routes = [
  {path:'question/:id',component:QuestionComponent},
  {path:'score',component:ScorePageComponent},

  {path:'**',component:IntroPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
