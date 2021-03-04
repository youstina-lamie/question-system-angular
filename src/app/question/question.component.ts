import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../Services/questions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../Services/user.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  question: {};
  answerChoice;
  currentQuestionId = 1;
  nextQuestionId;
  score = 0;
  timeout = 10000;
  firstTimer;
  secondTimer;
  firstCountdownTimer;
  secondCountdownTimer;
  countdown = 59;
  buttonText="Next"

  constructor(
    private Questions: QuestionsService,
    private user:UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.question = this.Questions.getQuestionById(1);
    this.firstCountdownTimer = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      }
    }, 1000);
    this.firstTimer = setTimeout(() => {
      if (this.answerChoice) {
        this.nextQuestion();
      } else {
        this.user.addUserScore(this.score);
        this.router.navigate(['score']);
      }
    }, this.timeout);
  }
  ngDoCheck() {
    this.activatedRoute.params.subscribe((res) => {
      this.currentQuestionId = res.id;
      this.question = this.Questions.getQuestionById(this.currentQuestionId);
    });
  }

  checkInput(i) {
    this.answerChoice = i;
  }

  nextQuestion() {
    clearTimeout(this.firstTimer);
    clearInterval(this.firstCountdownTimer);
    clearTimeout(this.secondTimer);
    clearInterval(this.secondCountdownTimer);

    this.countdown = 59;
    
    
    if (this.answerChoice === this.question['answer']) {
      this.score++;
    }
    
    this.currentQuestionId = parseInt(this.activatedRoute.snapshot.params.id);
    
    this.nextQuestionId = this.currentQuestionId + 1;
    this.router.navigate(['question', this.nextQuestionId]);
    if(this.nextQuestionId==10){
      this.buttonText="Finish"
    }
    if(this.currentQuestionId==10){
      this.user.addUserScore(this.score);

      this.router.navigate(['score']);
    }
    console.log(this.score);
    
    this.answerChoice = null;
    this.secondTimer=setTimeout(() => {
      if (this.answerChoice) {
        this.nextQuestion();
      } else {
        this.user.addUserScore(this.score);
        this.router.navigate(['score']);
      }
    }, this.timeout);

    this.secondCountdownTimer=setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      }
    }, 1000);
  }
}
