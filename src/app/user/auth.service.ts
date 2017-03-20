import {Injectable} from '@angular/core';
import {IUser} from './IUser';

@Injectable()
export class AuthService{
 
    currentUser:IUser
   loginUser(username: string, password:string):void{
      
      this.currentUser = {
          id:1,
          firstName:"Akash",
          lastName:"Agarwal",
          userName:"akashagr"
      }
       

   }

   isAuthenticated():boolean{

        return !!this.currentUser;

   }

}