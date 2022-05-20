import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserService} from "./services/user.service";

import {UsersComponent} from "./components/users/users.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";

const routes: Routes = [
  {
    path: '', component: UsersComponent, children: [
      {path: ':id', component: UserDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    UserService
  ]
})
export class UserRoutingModule {
}
