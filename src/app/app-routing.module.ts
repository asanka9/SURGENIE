import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './layouts/account/account.component';
import { AddUserComponent } from './layouts/users/add-user/add-user.component';
import { CalenderComponent } from './layouts/calender/calender.component';
import { LoginComponent } from './layouts/login/login.component';
import { NotFoundComponent } from './layouts/not-found/not-found.component';
import { ResourceComponent } from './layouts/resource/resource.component';
import { SurgentComponent } from './layouts/surgent/surgent.component';
import { SurgeonComponent } from './layouts/surgeon/surgeon.component';
import { SurgeryComponent } from './layouts/surgery/surgery.component';
import { TeamComponent } from './layouts/team/team.component';
import { UsersComponent } from './layouts/users/users.component';

const routes: Routes = [
  {
    path:'',
    component:CalenderComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'resource',
    component:ResourceComponent
  },
  {
    path:'surgeon',
    component:SurgeonComponent
  },
  {
    path:'surgery',
    component:SurgeryComponent
  },
  {
    path:'account',
    component:AccountComponent
  },
  {
    path:'team',
    component:TeamComponent
  },
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'my-team',
    component:TeamComponent
  },
  {
    path:'add-user',
    component:AddUserComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
