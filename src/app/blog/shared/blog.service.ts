import { Injectable } from '@angular/core';
import {IBlog}  from './Iblog';

@Injectable()
export class BlogService {

  constructor() { }

  getBlogList():IBlog[]{
     
     
    const list:IBlog[] =  [
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
   "title" : "first blog -3",
   "publishedDate": new Date('2017-2-2')
     },
      {
       "blogId":4,
   "title" : "first blog -4",
   "publishedDate": new Date('2017-2-2')
     }
     ];

     return list;

  }

}
