import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BlogComponent } from './blog/blog.component';
import { PostBlogComponent } from './blog/postblog/postblog.component';
import { BlogdetailComponent } from './blog/blogdetail/blogdetail.component';

import {AuthService} from './user/auth.service';
import {BlogService} from './blog/shared/blog.service';

import {AppRoutes} from './app.route';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SignupComponent } from './user/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BlogComponent,
    PostBlogComponent,
    BlogdetailComponent,
    LoginComponent,
    ProfileComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [BlogService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
