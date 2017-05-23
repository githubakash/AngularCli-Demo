import { Component, OnInit } from '@angular/core';
import {BlogService} from './shared/blog.service';
import {IBlog} from './shared/Iblog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

imagePath:string;
   blogList:IBlog[];
 
  constructor(private _blogService:BlogService) {
 
   }

    
   
   

  ngOnInit():void {
     this.imagePath = '/app/images/akash.png';
      this.blogList =  this._blogService.getBlogList();
      this._blogService.blogSearchObservable.subscribe(val => this.blogList = val);
  }

  SearchBlog(input:string):void{
      
  }

} 
