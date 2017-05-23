import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ElementRef   } from '@angular/core';
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
import {ToastrService} from './shared/toastr.service';

import {AppRoutes} from './app.route';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SignupComponent } from './user/signup/signup.component';

import {MyHighlighterDirective} from './blog/my-highlighter.directive';
import { ContactManagementComponent } from './ContactManagement/contactmamangement.component';
import { SearchBlogComponent } from './blog/search-blog/search-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BlogComponent,
    PostBlogComponent,
    BlogdetailComponent,
    LoginComponent,
    ProfileComponent,
    SignupComponent,
    MyHighlighterDirective,
    ContactManagementComponent,
    SearchBlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [BlogService,AuthService,ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
