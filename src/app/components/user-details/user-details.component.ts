import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IUserDetails} from "../../interfaces";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: IUserDetails

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      const {state: {data}} = history;
      this.userDetails = data as IUserDetails
    })
  }

}
