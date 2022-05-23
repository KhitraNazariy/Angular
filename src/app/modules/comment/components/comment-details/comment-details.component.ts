import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CommentService} from "../../services/comment.service";
import {IComment} from "../../interfaces/comment.interface";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  comment: IComment

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['comment']

      if (state) {
        this.comment = state
      } else {
        this.activatedRoute.data.subscribe(({commentData}) => this.comment = commentData)
      }

    })
  }

}
