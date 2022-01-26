import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalenderComponent } from './layouts/calender/calender.component';
import { ResourceComponent } from './layouts/resource/resource.component';
import { SurgentComponent } from './layouts/surgent/surgent.component';
import { SurgeryComponent } from './layouts/surgery/surgery.component';
import { AccountComponent } from './layouts/account/account.component';
import { UsersComponent } from './layouts/users/users.component';
import { NotFoundComponent } from './layouts/not-found/not-found.component';
import { FooterComponent } from './shared/footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import {MatListModule} from '@angular/material/list';
import { SurgeonComponent } from './layouts/surgeon/surgeon.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import { FormsModule } from '@angular/forms'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './layouts/login/login.component';
import { TeamComponent } from './layouts/team/team.component';
import {MatChipsModule} from '@angular/material/chips';
import {ReactiveFormsModule} from '@angular/forms';
import { AddUserComponent } from './layouts/add-user/add-user.component';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { SessionCardComponent } from './widget/session-card/session-card.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    CalenderComponent,
    ResourceComponent,
    SurgentComponent,
    SurgeryComponent,
    AccountComponent,
    UsersComponent,
    NotFoundComponent,
    FooterComponent,
    SideNavComponent,
    SurgeonComponent,
    LoginComponent,
    TeamComponent,
    AddUserComponent,
    SessionCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    DragDropModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
