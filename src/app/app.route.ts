import {Routes}  from '@angular/router';
import {BlogComponent} from './blog/blog.component';
import {BlogdetailComponent} from './blog/blogdetail/blogdetail.component';
import {PostBlogComponent} from './blog/postblog/postblog.component';
import {LoginComponent} from './user/login/login.component';

export const AppRoutes:Routes = [
    {path:'blog',component:BlogComponent},
    {path:'blogdetail/:id',component:BlogdetailComponent},
     {path:'create',component:PostBlogComponent},
     {path:'login',component:LoginComponent},
     {path:'', redirectTo:'/blog',pathMatch:'full'}
]