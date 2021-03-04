import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import{ QuestionsService} from '../Services/questions.service';
import { UserService } from './../Services/user.service';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { FormsModule } from '@angular/forms';
import { ScorePageComponent } from './score-page/score-page.component';




@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    IntroPageComponent,
    ScorePageComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [QuestionsService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
