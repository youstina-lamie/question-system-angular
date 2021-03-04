import { Component, Input, OnInit } from '@angular/core';
import { UserService } from './../../Services/user.service';

@Component({
  selector: 'app-score-page',
  templateUrl: './score-page.component.html',
  styleUrls: ['./score-page.component.scss']
})
export class ScorePageComponent implements OnInit {
  
  
  constructor(private user:UserService) { }
  message="";
  // score:number;
  pass:boolean;
  userr;
  


  ngOnInit(): void {
    this.userr=this.user.getUserData();
    
    if(this.userr['score']<6){
      this.message=`Ooh ${this.userr['name']}, Unfortunately you didn't pass the exam!!`
      this.pass=false;
    }
    console.log(this.message)
    if(this.userr['score']>=6){
      this.message=`congratulations ${this.userr['name']} !!!`
      this.pass=true;
    }
  }

}
