import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
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
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {


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
    {value: 'Dr', viewValue: 'Dr'},
    {value: 'Mr', viewValue: 'Mr'},
    {value: 'Ms', viewValue: 'Ms'}

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


  loggedIn = false
  is_admin_staff = false
  is_medical_staff = false
  role = ''
  admin_value = ''
  user_type = ''

  constructor(private auth:AuthService, private router:Router){
    this.adminFormControl.setValue('admin-01')

    this.auth.getUserInfo().subscribe((res)=>{
      this.loggedIn = true
      this.is_admin_staff = res['is_admin_staff']
      this.is_medical_staff = res['is_medical_staff']
      this.role = res['role']
      if (this.is_admin_staff) {
        let profie = res['profile']
        console.log(profie);
        
        this.addressFormControl.setValue(profie['address'])
        this.firstNameFormControl.setValue(profie['first_name'])
        this.lastNameFormControl.setValue(profie['last_name'])
        this.emailFormControl.setValue(profie['email'])
        this.telephoneFormControl.setValue(profie['telephone'])
        this.professionalTypeFormControl.setValue(profie['type'])
        this.admin_value = profie['level']
        this.user_type = profie['title']
      }else if (this.is_medical_staff) {
        let profie = res['profile']

        switch (this.role) {
          case 'surgeon':
            this.addressFormControl.setValue(profie['address'])
            this.firstNameFormControl.setValue(profie['first_name'])
            this.lastNameFormControl.setValue(profie['last_name'])
            this.professionalTypeFormControl.setValue(profie['type'])
            this.registrationNumberFromcontrol.setValue(profie['registration_number'])
            this.telephoneFormControl.setValue(profie['telephone'])
            this.emailFormControl.setValue(profie['email'])
            this.admin_value = profie['level']
            this.user_type = profie['title']
            break;
        
          default:
            break;
        }
      }
    },(err)=>{
      this.loggedIn = false
      this.router.navigate(['/login'])
    })
  }



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

    // this.professionalTypeFormControl.reset()
    // this.firstNameFormControl.reset()
    // this.lastNameFormControl.reset()
    // this.emailFormControl.reset()
    // this.telephoneFormControl.reset()
    // this.addressFormControl.reset()
    // this.registrationNumberFromcontrol.reset()
    // this.specialityFormControl.reset()
    // this.dayFormControl.reset()
    // this.sessionFormControl.reset()
    // this.dataSourceSession = []
    // this.session_list = []
    this.auth.updateUser(data);

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
    this.auth.updateUser(data);

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
    this.auth.updateUser(data);
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
    this.auth.updateUser(data);
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
    
    // this.professionalTypeFormControl.reset()
    // this.firstNameFormControl.reset()
    // this.lastNameFormControl.reset()
    // this.emailFormControl.reset()
    // this.telephoneFormControl.reset()
    // this.addressFormControl.reset()
    // this.adminFormControl.reset()
    this.auth.updateUser(data)
  }


}
