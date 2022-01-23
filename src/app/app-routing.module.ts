import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './layouts/account/account.component';
import { CalenderComponent } from './layouts/calender/calender.component';
import { NotFoundComponent } from './layouts/not-found/not-found.component';
import { ResourceComponent } from './layouts/resource/resource.component';
import { SurgentComponent } from './layouts/surgent/surgent.component';
import { SurgeonComponent } from './layouts/surgeon/surgeon.component';
import { SurgeryComponent } from './layouts/surgery/surgery.component';
import { UsersComponent } from './layouts/users/users.component';

const routes: Routes = [
  {
    path:'',
    component:CalenderComponent
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
    path:'users',
    component:UsersComponent
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
