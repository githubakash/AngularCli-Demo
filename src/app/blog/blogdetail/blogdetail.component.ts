import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';


@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.css']
 
})
export class BlogdetailComponent implements OnInit {
      

/**  This is blog Id */
    blogId:any;

/** This is title */
   title:any;

   name:number;
  
    constructor(private _activatedRoute:ActivatedRoute, private _router:Router) {
    //Does not work
     // this.blogId = this._activatedRoute.snapshot.params['id'];
    //this.title= `This is blog detail for blogID:${this.blogId}`;

   }

   
 
  ngOnInit() {
      this.blogId = this._activatedRoute.snapshot.params['id'];
    this.title= `This is blog detail for blogID:${this.blogId}`;
      }

  ShowblogList():void{

       this._router.navigate(['/blog']);
  }

    PurgeBlog<T>(blog:T):number{
       
        return 1;
    }

}
