import { Component } from '@angular/core';
import { Router } from '@angular/router';

// import { QuestionComponent } from './question/question.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  constructor(private router:Router){}
  title = 'question-system';



}
