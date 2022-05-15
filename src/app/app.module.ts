import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {UserComponent, UsersComponent} from "./components";
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';
import {CommentsComponent} from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    PostsComponent,
    PostComponent,
    PostDetailsComponent,
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'users',
        component: UsersComponent,
        children: [
          {path: 'user-details/:id', component: UserDetailsComponent}
        ]
      },

      {
        path: 'posts',
        component: PostsComponent,
        children: [
          {path: 'post-details/:id', component: PostDetailsComponent}
        ]
      },

      {
        path: 'comments',
        component: CommentsComponent,
        children: [
          {path: 'comment-details/:id', component: CommentDetailsComponent}
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
