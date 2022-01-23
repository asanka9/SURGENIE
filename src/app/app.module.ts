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
    SurgeonComponent
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
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
