import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {IUser} from "../../interfaces/user.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({usersData}) => this.users = usersData)
  }

}
