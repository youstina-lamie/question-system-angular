import { User } from 'src/_model/userModal';
// import{User} from './../_model/userModal';
export class UserService {
  user={name:'',score:0};

  addUserName(name:string){
      this.user.name=name;
  }
  addUserScore(score:number){
    this.user.score=score;
  }
 
  getUserData(){
    return this.user;
  }
}
