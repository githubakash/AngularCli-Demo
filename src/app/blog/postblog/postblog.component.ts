import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postblog',
  templateUrl: './postblog.component.html',
  styleUrls: ['./postblog.component.css']
})
export class PostBlogComponent implements OnInit {

   title:string = 'Create blog page';
  constructor() { }

  ngOnInit() {
  }

}
