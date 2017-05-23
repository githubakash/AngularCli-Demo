import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {IProfile} from './IProfile';
@Injectable()
export class ProfileService{
    
    private profilePath = "./profile.json";
    constructor(private _http:Http){}

    getProfile(profileId:number):IProfile{
         
         let profile:IProfile;
         

         this._http.get(this.profilePath)


    }


}