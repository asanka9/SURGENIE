import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatTable } from '@angular/material/table';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

interface Food {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface SessionElement {
  day: string;
  session: string;
}

const ELEMENT_DATA: SessionElement[] = [
];



interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})

export class AddUserComponent implements OnInit {


  displayedColumns: string[] = ['day', 'session'];
  dataSource = ELEMENT_DATA;

  foods: Food[] = [
    {value: 'nurse', viewValue: 'Nurse'},
    {value: 'surgeon', viewValue: 'Surgeon'},
    {value: 'trainee-surgeon', viewValue: 'Trainee Surgeon'},
    {value: 'anesthesiologist', viewValue: 'Anesthesiologist'},
    {value: 'admin', viewValue: 'Admin'},

  ];

  
  preofessionals: Food[] = [
    {value: 'nurse', viewValue: 'Dr'},
    {value: 'surgeon', viewValue: 'Mr'},
    {value: 'trainee-surgeon', viewValue: 'Ms'},
    {value: 'anesthesiologist', viewValue: 'Anesthesiologist'},
    {value: 'admin', viewValue: 'Admin'},

  ];

  days: Food[] = [
    {value: 'sun', viewValue: 'Sunday'},
    {value: 'mon', viewValue: 'Monday'},
    {value: 'tue', viewValue: 'Tuesday'},
    {value: 'wed', viewValue: 'Wednesday'},
    {value: 'thur', viewValue: 'Thursday'},
    {value: 'fri', viewValue: 'Friday'},
    {value: 'sat', viewValue: 'Saturday'},

  ];

  sessions: Food[] = [
    {value: '8-10', viewValue: '8 a.m - 10 a.m'},
    {value: '8-12', viewValue: '8 a.m - 12 a.m'},


  ];

  speciallity: Food[] = [
    {value: 'speciallity-01', viewValue: 'Speciallity'},
    {value: 'speciallity-01', viewValue: 'Speciallity'},
    {value: 'speciallity-01', viewValue: 'Speciallity'},
    {value: 'speciallity-01', viewValue: 'Speciallity'},
    {value: 'speciallity-01', viewValue: 'Speciallity'},
    {value: 'speciallity-01', viewValue: 'Speciallity'},
    {value: 'speciallity-01', viewValue: 'Speciallity'},
    {value: 'speciallity-01', viewValue: 'Speciallity'}
  ];

  adminlevels: Food[] = [
    {value: 'admin-01', viewValue: 'Level 01'},
    {value: 'admin-02', viewValue: 'Level 02'},
    {value: 'admin-03', viewValue: 'Level 03'},
    {value: 'admin-04', viewValue: 'Level 04'},
    {value: 'admin-05', viewValue: 'Level 05'},
  ];

  matcher = new MyErrorStateMatcher();
  constructor(private auth : AuthService) { }
  ngOnInit(): void {
  }


  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | any;


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  userType : any

  onChangeUserType(event:any){
    this.userType = event.value
  }


  selectedValue: string | undefined;
  selectedCar: string | undefined;


  cars: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'},
  ];

  // Table Session

  displayedSessionColumns: string[] = ['day', 'session'];
  dataSourceSession = [...ELEMENT_DATA];

  @ViewChild(MatTable) tableSession: MatTable<SessionElement> | any;


  dayFormControl = new FormControl('', [Validators.required]);
  sessionFormControl = new FormControl('', [Validators.required]);

  session_list : any=[];

  removeData() {
    this.dataSourceSession.pop();
    this.session_list.pop()
    this.tableSession.renderRows();
  }

  addSession(){
    this.dataSourceSession.push({"day":this.dayFormControl.value.viewValue,"session":this.sessionFormControl.value.viewValue});
    this.session_list.push({"day":this.dayFormControl.value.value,"session":this.sessionFormControl.value.value})
    this.dayFormControl.reset()
    this.sessionFormControl.reset()
    this.tableSession.renderRows();
  }

  bioSection = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl('')
  });


  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  firstNameFormControl = new FormControl('', [Validators.required]);
  lastNameFormControl = new FormControl('', [Validators.required]);
  telephoneFormControl = new FormControl('', [Validators.required]);
  addressFormControl = new FormControl('', [Validators.required]);
  specialityFormControl = new FormControl('', [Validators.required]);
  adminFormControl = new FormControl('', [Validators.required]);
  professionalTypeFormControl = new FormControl('', [Validators.required]);
  registrationNumberFromcontrol= new FormControl('', [Validators.required]);
  adminRole  = new FormControl('', [Validators.required]);
  isSister = new FormControl('', [Validators.required]);


  // User Registration Area
  registerSurgeon(){
    var data = {
      "title":this.professionalTypeFormControl.value,
      "first_name": this.firstNameFormControl.value,
      "last_name":this.lastNameFormControl.value,
      "email":this.emailFormControl.value,
      "telephone":this.telephoneFormControl.value,
      "address":this.addressFormControl.value,
      "registration_number":this.registrationNumberFromcontrol.value,
      "specialty":this.specialityFormControl.value,
      'session':this.session_list,
      "is_medical_staff":true,
      "is_admin_staff":false,
      "role":'surgeon'
    }

    this.professionalTypeFormControl.reset()
    this.firstNameFormControl.reset()
    this.lastNameFormControl.reset()
    this.emailFormControl.reset()
    this.telephoneFormControl.reset()
    this.addressFormControl.reset()
    this.registrationNumberFromcontrol.reset()
    this.specialityFormControl.reset()
    this.dayFormControl.reset()
    this.sessionFormControl.reset()
    this.dataSourceSession = []
    this.session_list = []
    this.auth.registerUser(data);

  }

  registerAnesthelogist(){
    var data = {
      "title":this.professionalTypeFormControl.value,
      "first_name": this.firstNameFormControl.value,
      "last_name":this.lastNameFormControl.value,
      "email":this.emailFormControl.value,
      "telephone":this.telephoneFormControl.value,
      "address":this.addressFormControl.value,
      "registration_number":this.registrationNumberFromcontrol.value,
      "is_medical_staff":true,
      "is_admin_staff":false,
      "role":'anesthesiologist'
    }
    
    this.professionalTypeFormControl.reset()
    this.firstNameFormControl.reset()
    this.lastNameFormControl.reset()
    this.emailFormControl.reset()
    this.telephoneFormControl.reset()
    this.addressFormControl.reset()
    this.registrationNumberFromcontrol.reset()
    this.auth.registerUser(data);

  }

  registerNurse(){
    var data = {
      "title":this.professionalTypeFormControl.value,
      "first_name": this.firstNameFormControl.value,
      "last_name":this.lastNameFormControl.value,
      "email":this.emailFormControl.value,
      "telephone":this.telephoneFormControl.value,
      "address":this.addressFormControl.value,
      "registration_number":this.registrationNumberFromcontrol.value,
      "is_medical_staff":true,
      "is_admin_staff":false,
      "role":'nurse'
    }
    
    this.professionalTypeFormControl.reset()
    this.firstNameFormControl.reset()
    this.lastNameFormControl.reset()
    this.emailFormControl.reset()
    this.telephoneFormControl.reset()
    this.addressFormControl.reset()
    this.registrationNumberFromcontrol.reset()
    this.auth.registerUser(data);
  }


  registerTraineeSurgeon(){
    var data = {
      "title":this.professionalTypeFormControl.value,
      "first_name": this.firstNameFormControl.value,
      "last_name":this.lastNameFormControl.value,
      "email":this.emailFormControl.value,
      "telephone":this.telephoneFormControl.value,
      "address":this.addressFormControl.value,
      "registration_number":this.registrationNumberFromcontrol.value,
      "specialty":this.specialityFormControl.value,
      'session':this.session_list,
      "is_medical_staff":true,
      "is_admin_staff":false,
      "role":'trainee_surgeon'
    }
    
    this.professionalTypeFormControl.reset()
    this.firstNameFormControl.reset()
    this.lastNameFormControl.reset()
    this.emailFormControl.reset()
    this.telephoneFormControl.reset()
    this.addressFormControl.reset()
    this.registrationNumberFromcontrol.reset()
    this.specialityFormControl.reset()
    this.dayFormControl.reset()
    this.sessionFormControl.reset()
    this.dataSourceSession = []
    this.session_list = []
    this.auth.registerUser(data);
  }


  registerAdmin(){
    var data = {
      "title":this.professionalTypeFormControl.value,
      "first_name": this.firstNameFormControl.value,
      "last_name":this.lastNameFormControl.value,
      "email":this.emailFormControl.value,
      "telephone":this.telephoneFormControl.value,
      "address":this.addressFormControl.value,
      "is_medical_staff":false,
      "is_admin_staff":true,
      "role":this.adminFormControl.value
    }
    
    this.professionalTypeFormControl.reset()
    this.firstNameFormControl.reset()
    this.lastNameFormControl.reset()
    this.emailFormControl.reset()
    this.telephoneFormControl.reset()
    this.addressFormControl.reset()
    this.adminFormControl.reset()
    this.auth.registerUser(data)
  }


}
