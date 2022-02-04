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
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {DefaultMatCalendarRangeStrategy, MatDatepickerModule, MAT_DATE_RANGE_SELECTION_STRATEGY} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import { FormsModule } from '@angular/forms'; 
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './layouts/login/login.component';
import { TeamComponent } from './layouts/team/team.component';
import {MatChipsModule} from '@angular/material/chips';
import {ReactiveFormsModule} from '@angular/forms';
import { AddUserComponent } from './layouts/users/add-user/add-user.component';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { SessionCardComponent } from './widget/session-card/session-card.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxDefaultOptions, MatCheckboxModule, MAT_CHECKBOX_DEFAULT_OPTIONS} from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
import { AddResourceComponent } from './layouts/add-resource/add-resource.component';
import { LoadingComponent } from './widget/loading/loading.component';
import { UpdateUserComponent } from './layouts/account/update-user/update-user.component';
import { SurgeryHistoryComponent } from './layouts/account/surgery-history/surgery-history.component';
import { MotivationComponent } from './calender/motivation/motivation.component';
import { QuoteComponent } from './layouts/calender/quote/quote.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AdminComponent } from './shared/side-nav/admin/admin.component';
import { MedicalStaffComponent } from './shared/side-nav/medical-staff/medical-staff.component';
import { SurgeonComponent } from './shared/side-nav/surgeon/surgeon.component';
import {MatRadioModule} from '@angular/material/radio';
import { ClockLoadingComponent } from './layouts/surgery/clock-loading/clock-loading.component';
import {MatStepperModule} from '@angular/material/stepper';


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
    SessionCardComponent,
    AddResourceComponent,
    LoadingComponent,
    UpdateUserComponent,
    SurgeryHistoryComponent,
    MotivationComponent,
    QuoteComponent,
    AdminComponent,
    MedicalStaffComponent,
    ClockLoadingComponent
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
    MatPaginatorModule,
    MatCheckboxModule,
    BrowserModule,
    MatTableModule,
    MatSortModule,
    HttpClientModule,
    MatRadioModule,
    MatStepperModule
  ],
  providers: [
    {
       provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } ,

    },
      {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
