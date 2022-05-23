import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import {CommentService} from "./services/comment.service";
import {HttpClientModule} from "@angular/common/http";
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';
import {CommentsResolver} from "./services/resolvers/comments.resolver";
import {CommentResolver} from "./services/resolvers/comment.resolver";
import {CommentGuard} from "./services/guards/comment.guard";


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule
  ],
  providers: [
    CommentService,
    CommentsResolver,
    CommentResolver,
    CommentGuard
  ]
})
export class CommentModule { }
