import { Injectable } from '@angular/core';
import {IBlog}  from './Iblog';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class BlogService {
 

    blogList:IBlog[];
    private blogListSource = new BehaviorSubject<IBlog[]>(this.getBlogList());
    blogSearchObservable = this.blogListSource.asObservable();
  constructor() { }

    SearchBlog(input:string):void{
         console.log('search key:' + input);
       let filteredBlogList = this.blogList.filter(x => x.title.toUpperCase().indexOf(input.toUpperCase()) >= 0);
  //console.log((x => x.title.indexOf(input) >= 0)());

         console.log('filterd list:' + filteredBlogList);
       this.blogListSource.next(filteredBlogList)
      }
   
  getBlogList():IBlog[]{
     
     
    this.blogList =  [
       {
       "blogId":1,
   "title" : "first blog -1",
   "publishedDate": new Date('2017-2-2')
     },
      {
       "blogId":2,
   "title" : "first blog -2",
   "publishedDate": new Date('2017-2-2')
     },
      {
       "blogId":3,
   "title" : "second blog -3",
   "publishedDate": new Date('2017-2-2')
     },
      {
       "blogId":4,
   "title" : "second blog -4",
   "publishedDate": new Date('2017-2-2')
     },
      {
       "blogId":5,
   "title" : "Passing data between component",
   "publishedDate": new Date('2017-3-3')
     }
     ];

     return this.blogList;

  }

}
