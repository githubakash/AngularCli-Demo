import { Injectable } from '@angular/core';
import {IToastrService} from './IToastrService';
declare let toastr:any;

@Injectable()
export class ToastrService implements IToastrService {

  constructor() { }

   success(message:string,title?:string):void{
      toastr.success(message,title);
    
   }
   error(message:string,title?:string):void{
      toastr.error(message,title);
    
   }
   warning(message:string,title?:string):void{
      toastr.warning(message,title);
    
   }
    info(message:string,title?:string):void{
      toastr.info(message,title);
    
   }


}
