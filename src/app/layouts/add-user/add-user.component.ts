import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatTable } from '@angular/material/table';
import { Observable } from 'rxjs';


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

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'}
// ];

export interface SessionElement {
  day: string;
  session: string;
}

const ELEMENT_DATA: SessionElement[] = [
  {day: 'Mon', session: '10 a.m - 12 a.m'},
  {day: 'Mon', session: '10 a.m - 12 a.m'},
  {day: 'Mon', session: '10 a.m - 12 a.m'},
  {day: 'Mon', session: '10 a.m - 12 a.m'},
  {day: 'Mon', session: '10 a.m - 12 a.m'}

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
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  firstNameFormControl = new FormControl('', [Validators.required]);
  lastNameFormControl = new FormControl('', [Validators.required]);
  telephoneFormControl = new FormControl('', [Validators.required]);
  addressFormControl = new FormControl('', [Validators.required]);
  professionalTypeFormControl = new FormControl('', [Validators.required]);

  // Doctor | Nurse
  registrationNumber= new FormControl('', [Validators.required]);
  // Admin
  adminRole  = new FormControl('', [Validators.required]);
  // Doctor
  speciality = new FormControl('', [Validators.required]);
  // is Sister
  isSister = new FormControl('', [Validators.required]);

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
    {value: 'saturday', viewValue: 'Saturday'},

  ];

  sessions: Food[] = [
    {value: 'nurse', viewValue: '8 a.m - 10 a.m'},
    {value: 'surgent', viewValue: '8 a.m - 12 a.m'},
    {value: 'trainee-surgent', viewValue: 'Trainee Surgent'},
    {value: 'anesthesiologist', viewValue: 'Anesthesiologist'},
    {value: 'admin', viewValue: 'Admin'},

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
    {value: 'speciallity-01', viewValue: 'Level 01'},
    {value: 'speciallity-01', viewValue: 'Speciallity'},
    {value: 'speciallity-01', viewValue: 'Speciallity'},
    {value: 'speciallity-01', viewValue: 'Speciallity'},
    {value: 'speciallity-01', viewValue: 'Speciallity'},
    {value: 'speciallity-01', viewValue: 'Speciallity'},
    {value: 'speciallity-01', viewValue: 'Speciallity'},
    {value: 'speciallity-01', viewValue: 'Speciallity'}
  ];

  matcher = new MyErrorStateMatcher();
  constructor() { }
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

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSourceSession.push(ELEMENT_DATA[randomElementIndex]);
    this.tableSession.renderRows();
  }

  removeData() {
    this.dataSourceSession.pop();
    this.tableSession.renderRows();
  }

  dayFormControl = new FormControl('', [Validators.required]);
  sessionFormControl = new FormControl('', [Validators.required]);

  addSession(){
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSourceSession.push({"day":this.dayFormControl.value,"session":this.sessionFormControl.value});
    this.tableSession.renderRows();
  }

}
