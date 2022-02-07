import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { map, startWith } from 'rxjs/operators';
import { MatChipInputEvent } from '@angular/material/chips';
import { MyErrorStateMatcher } from '../users/add-user/add-user.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatTable } from '@angular/material/table';
import { SurgeryService } from 'src/app/services/surgery.service';
import { TeamService } from 'src/app/services/team.service';
import { MatStepper } from '@angular/material/stepper';
import { ToastrService } from 'ngx-toastr';

interface Food {
  value: string;
  viewValue: string;
}


//   columns: string[] = ['resource', 'amount', 'predicted', 'estimated'];


export interface PeriodicElement {
  resource: string;
  amount: number;
  predicted: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {resource: "Trainee Surgeon", amount: 3232, predicted: 2},
  {resource: "Nurse", amount: 3232, predicted: 5},
  {resource: "Anesthelogist", amount: 3232, predicted: 2},
];

@Component({
  selector: 'app-surgery',
  templateUrl: './surgery.component.html',
  styleUrls: ['./surgery.component.scss']
})
export class SurgeryComponent implements OnInit {


  separatorKeysCodes: number[] = [ENTER, COMMA];

  chipsCtrlNurse = new FormControl();
  chipsCtrlTraineeSurgent = new FormControl();
  chipsCtrlAnesthetic = new FormControl();


  filteredNurse: Observable<string[]> | undefined;
  filteredTraineeSurgent: Observable<string[]> | undefined;
  filteredAnesthetic: Observable<string[]> | undefined;

  nurse: string[] = [];
  allnurse: string[] = [];

  traineeSurgent: string[] = [];
  alltraineeSurgent: string[] = [];

  anesthetic: string[] = [];
  allAnesthetic: string[] = [];

  @ViewChild('fruitInput') nurseInput: ElementRef<HTMLInputElement> | undefined;
  @ViewChild('fruitInput') traineeSurgentInput: ElementRef<HTMLInputElement> | undefined;
  @ViewChild('fruitInput') anesthetisticInput: ElementRef<HTMLInputElement> | undefined;


  isCustomizedSurgent = false;
  isCustomizedNurse = false;
  isCustomizedAnesthtistic = false;

  customizeAnesthatistic(){
    this.isCustomizedAnesthtistic = !this.isCustomizedAnesthtistic;
  }

  customizeNurse(){
    this.isCustomizedNurse = !this.isCustomizedNurse;
  }

  customizeTraineeSurgent(){
    this.isCustomizedSurgent = !this.isCustomizedSurgent;
  }

  addNurse(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.nurse.push(value);
    }
    event.chipInput!.clear();
    this.chipsCtrlNurse.setValue(null);
  }

  addTraineeSurgent(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.traineeSurgent.push(value);
    }
    event.chipInput!.clear();
    this.chipsCtrlTraineeSurgent.setValue(null);
  }

  addAnesthetistic(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.anesthetic.push(value);
    }
    event.chipInput!.clear();
    this.chipsCtrlAnesthetic.setValue(null);
  }

  removeNurse(fruit: string): void {
    const index = this.nurse.indexOf(fruit);
    if (index >= 0) {
      this.nurse.splice(index, 1);
    }
  }

  removeTraineeSurgent(fruit: string): void {
    const index = this.traineeSurgent.indexOf(fruit);
    if (index >= 0) {
      this.traineeSurgent.splice(index, 1);
    }
  }

  removeAnesthatistic(fruit: string): void {
    const index = this.anesthetic.indexOf(fruit);
    if (index >= 0) {
      this.anesthetic.splice(index, 1);
    }
  }

  selectedNurse(event: MatAutocompleteSelectedEvent): void {
    this.nurse.push(event.option.viewValue);
    if (this.nurseInput) {
      this.nurseInput.nativeElement.value = '';
    }
    this.chipsCtrlNurse.setValue(null);
  }

  selectedAnesthetistic(event: MatAutocompleteSelectedEvent): void {
    this.anesthetic.push(event.option.viewValue);
    if (this.anesthetisticInput) {
      this.anesthetisticInput.nativeElement.value = '';
    }
    this.chipsCtrlAnesthetic.setValue(null);
  }

  selectedTraineeSurgent(event: MatAutocompleteSelectedEvent): void {
    this.traineeSurgent.push(event.option.viewValue);
    if (this.traineeSurgentInput) {
      this.traineeSurgentInput.nativeElement.value = '';
    }
    this.chipsCtrlTraineeSurgent.setValue(null);
  }

  private _filterNurse(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allnurse.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

  private _filterTaineeSurgent(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.alltraineeSurgent.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }
  
  private _filterAnesthetistic(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allAnesthetic.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

  getProfilePicSurgeon(index:any){
    return "assets/surgeons/"+"surgeon_"+index+".jpg"
  }

  getProfilePicNurse(index:any){
    return "assets/nurse/"+"nurse_"+index+".jpg"
  }

  getProfilePicAnesthesiologist(index:any){
    return "assets/anesthesiologist/"+"anaesthetist_"+index+".jpg"
  }


  getEmailAddress(name:any){
    let names = name.split(' ')
    return names[1]+names[2]+'@gmail.com'
  }

  getTelephone(index:any){
    let telephones = ['77 323 343 6','76 454 343 4']
    return telephones[Number(index)%2]
  }


  myControl = new FormControl();
  resourceControl = new FormControl();

  options: string[] = ['One1', 'Two1', 'Three1'];
  resources: string[] = ['Resource', 'Resource', 'Resource'];

  filteredOptions: Observable<string[]> | undefined;
  filteredResourceOptions: Observable<string[]> | undefined;



  matcher = new MyErrorStateMatcher();

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  value = 'Clear me';


  columns: string[] = ['resource',  'predicted', 'estimated'];
  dataSource = ELEMENT_DATA;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );

    this.filteredResourceOptions = this.resourceControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterResources(value)),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterResources(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.resources.filter(r => r.toLowerCase().includes(filterValue));
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

  @ViewChild(MatTable) table: MatTable<PeriodicElement> | any;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  constructor(private surgery:SurgeryService, private team : TeamService,private toastr: ToastrService) {
    this.filteredNurse = this.chipsCtrlNurse.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filterNurse(fruit) : this.allnurse.slice())),
    );
    this.filteredTraineeSurgent = this.chipsCtrlTraineeSurgent.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filterTaineeSurgent(fruit) : this.alltraineeSurgent.slice())),
    );
    this.filteredAnesthetic = this.chipsCtrlAnesthetic.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filterAnesthetistic(fruit) : this.allAnesthetic.slice())),
    );
  }


  selectedDateFormControl = new FormControl('');


  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  firstNameFormControl = new FormControl('', [Validators.required]);
  lastNameFormControl = new FormControl('', [Validators.required]);
  telephoneFormControl = new FormControl('',);
  addressFormControl = new FormControl('', [Validators.required]);
  ageFormControl = new FormControl('', [Validators.required]);
  genderFormControl = new FormControl('', [Validators.required]);
  noteFormControl = new FormControl('',);
  weightFormControl = new FormControl('', [Validators.required]);
  heightFormControl = new FormControl('', [Validators.required]);
  cancerFormControl = new FormControl('', [Validators.required]);
  cvdFormControl = new FormControl('', [Validators.required]);
  dementiaFormControl = new FormControl('', [Validators.required]);
  diabetesFormControl = new FormControl('', [Validators.required]);
  digestiveFormControl = new FormControl('', [Validators.required]);
  osteoarthritisFormControl = new FormControl('', [Validators.required]);
  pylogicalFormControl = new FormControl('', [Validators.required]);
  pulmonaryFormControl = new FormControl('', [Validators.required]);


  traineeSurgeonFormControl = new FormControl('', [Validators.required]);
  nurseFormControl = new FormControl('', [Validators.required]);
  anesthelogistFormControl = new FormControl('', [Validators.required]);


  startTimeFormControl  = new FormControl('',);
  endTimeFormControl  = new FormControl('',);


  createSurgery(stepper: MatStepper){
    let patient_details = {
      'first_name':this.firstNameFormControl.value,
      'last_name':this.lastNameFormControl.value,
      'email':this.emailFormControl.value,
      'telephone':this.telephoneFormControl.value,
      'address':this.addressFormControl.value,
      'age':this.ageFormControl.value,
      'gender':this.genderFormControl.value,
      'note':this.noteFormControl.value,
      'weight':this.weightFormControl.value,
      'height':this.heightFormControl.value,
      'cancer':this.cancerFormControl.value,
      'cvd':this.cvdFormControl.value,
      'dementia':this.dementiaFormControl.value,
      'diabetes':this.diabetesFormControl.value,
      'digestive':this.digestiveFormControl.value,
      'osteoarthritis':this.osteoarthritisFormControl.value,
      'pylogical':this.pylogicalFormControl.value,
      'pulmonary':this.pulmonaryFormControl.value
    }

    let surgery_details = {
      'start_hour':this.startTimeFormControl.value.split(':')[0],
      'start_minute':this.startTimeFormControl.value.split(':')[1],
      'end_hour':this.endTimeFormControl.value.split(':')[0],
      'end_minute':this.endTimeFormControl.value.split(':')[1],
      'date':this.selectedDateFormControl.value.getDate(),
      'month':this.selectedDateFormControl.value.getMonth(),
      'predicted_time':Number(this.predictedtime),
      'year':2022
    }

    let surgery_team_details = {
      'trainee_surgeon':this.traineeSurgeonFormControl.value,
      'anesthelogist':this.anesthelogistFormControl.value,
      'nurse':this.nurseFormControl.value
    }

    this.surgery.createSurgeryWithShedule(patient_details,surgery_details,surgery_team_details).subscribe((res)=>{


      this.nurse = res['fav_nurse']
      this.traineeSurgent = res['fav_trainee_surgeon']
      this.anesthetic = res['fav_anesthesiologist']
  
      this.allnurse = res['nurse']
      this.alltraineeSurgent = res['trainee_surgeon']
      this.allAnesthetic = res['anesthesiologist']  
      
      this.filteredNurse = this.chipsCtrlNurse.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => (fruit ? this._filterNurse(fruit) : this.allnurse.slice())),
      );
      this.filteredTraineeSurgent = this.chipsCtrlTraineeSurgent.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => (fruit ? this._filterTaineeSurgent(fruit) : this.alltraineeSurgent.slice())),
      );
      this.filteredAnesthetic = this.chipsCtrlAnesthetic.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => (fruit ? this._filterAnesthetistic(fruit) : this.allAnesthetic.slice())),
      );
  




      this.toastr.success('Update Successfully', 'Your profile update successfully', {
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
  
      });
    },(err)=>{
      this.toastr.error('everything is broken', 'Major Error', {
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
  
      });
    }
    
    )

    this.show_stepper_3 = true
    stepper.next()
    

  }


  getPredictedResult(type:any){
    //alert(type)
  }



  predictedtime = ''
  predictedtimeText = ''

  show_stepper_2 = false
  show_stepper_3 = false

  getPredictedTime(stepper: MatStepper){
    let patient_details = {
      'first_name':this.firstNameFormControl.value,
      'last_name':this.lastNameFormControl.value,
      'email':this.emailFormControl.value,
      'telephone':this.telephoneFormControl.value,
      'address':this.addressFormControl.value,
      'age':this.ageFormControl.value,
      'gender':this.genderFormControl.value,
      'note':this.noteFormControl.value,
      'weight':this.weightFormControl.value,
      'height':this.heightFormControl.value,
      'cancer':this.cancerFormControl.value,
      'cvd':this.cvdFormControl.value,
      'dementia':this.dementiaFormControl.value,
      'diabetes':this.diabetesFormControl.value,
      'digestive':this.digestiveFormControl.value,
      'osteoarthritis':this.osteoarthritisFormControl.value,
      'pylogical':this.pylogicalFormControl.value,
      'pulmonary':this.pulmonaryFormControl.value
    }


    this.surgery.getPredictedTime(patient_details).subscribe((res)=>{
      this.predictedtime = res['time']
      this.predictedtimeText = res['time_text']
      this.toastr.success('Update Successfully', 'Your profile update successfully', {
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
  
      });
    },(err)=>{
      this.toastr.error('everything is broken', 'Major Error', {
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
  
      });
    }
    
    )
    this.show_stepper_2 = true
    stepper.next();
  }

  saveMyTeam(){
    let surgery_details = {
      'start_hour':this.startTimeFormControl.value.split(':')[0],
      'start_minute':this.startTimeFormControl.value.split(':')[1],
      'end_hour':this.endTimeFormControl.value.split(':')[0],
      'end_minute':this.endTimeFormControl.value.split(':')[1],
      'date':this.selectedDateFormControl.value.getDate(),
      'month':this.selectedDateFormControl.value.getMonth(),
      'predicted_time':Number(this.predictedtime),
      'year':2022
    }

    this.team.bookTeam({'trainee_surgeon':this.traineeSurgent,'nurse':this.nurse,'anesthesiologists':this.anesthetic},surgery_details).subscribe((res)=>{

      this.toastr.success('Update Successfully', 'Your profile update successfully', {
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
  
      });
    },(err)=>{
      this.toastr.error('everything is broken', 'Major Error', {
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
  
      });
    }
    
    )
  }



}
