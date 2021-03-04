import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../../Services/user.service';


@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss']
})
export class IntroPageComponent implements OnInit {

  constructor(private router:Router,private UserService:UserService) { }
  ngOnInit(): void {
  }
  
  testStarting(input){
    var value=input.value;
    if(value.length===0){
      alert('Please Enter Your Name And Your Name Must Be At Least 3 Characters');
    }
    if(value.length<3 && value.length!==0){
      alert('Please Enter a Valid Name Which Contains At Least 3 Characters');
    }
    if(value.length>=3){
      this.UserService.addUserName(value);
      this.router.navigate(['question',1])
    }
   
  }

}
