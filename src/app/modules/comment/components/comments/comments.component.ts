import {Component, OnInit} from '@angular/core';
import {CommentService} from "../../services/comment.service";
import {IComment} from "../../interfaces/comment.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: IComment[]

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({commentsData}) => this.comments = commentsData)
  }

}
