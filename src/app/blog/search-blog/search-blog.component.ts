import { Component, OnInit } from '@angular/core';
import {BlogService} from './../shared/blog.service';

@Component({
  selector: 'search-blog',
  templateUrl: './search-blog.component.html',
  styleUrls: ['./search-blog.component.css']
})
export class SearchBlogComponent implements OnInit {
   

   searchKey:string;
  constructor(private _blogService:BlogService) {
 
   }

  ngOnInit() {
  }

   SearchBlog():void{
   
     this._blogService.SearchBlog(this.searchKey);
  }

}
