import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { map, startWith } from 'rxjs/operators';
import { MatChipInputEvent } from '@angular/material/chips';
import { MyErrorStateMatcher } from '../users/add-user/add-user.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatTable } from '@angular/material/table';

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
  {resource: "REsource 01", amount: 3232, predicted: 54},
  {resource: "REsource 01", amount: 3232, predicted: 54},
  {resource: "REsource 01", amount: 3232, predicted: 54},
  {resource: "REsource 01", amount: 3232, predicted: 54}
];

@Component({
  selector: 'app-surgery',
  templateUrl: './surgery.component.html',
  styleUrls: ['./surgery.component.scss']
})
export class SurgeryComponent implements OnInit {

  myControl = new FormControl();
  resourceControl = new FormControl();

  options: string[] = ['One1', 'Two1', 'Three1'];
  resources: string[] = ['Resource', 'Resource', 'Resource'];

  filteredOptions: Observable<string[]> | undefined;
  filteredResourceOptions: Observable<string[]> | undefined;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  firstNameFormControl = new FormControl('', [Validators.required]);
  lastNameFormControl = new FormControl('', [Validators.required]);
  telephoneFormControl = new FormControl('', [Validators.required]);
  addressFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  value = 'Clear me';


  columns: string[] = ['resource', 'amount', 'predicted', 'estimated'];
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
  // Team
  separatorKeysCodes: number[] = [ENTER, COMMA];

  chipsCtrlNurse = new FormControl();
  chipsCtrlTraineeSurgent = new FormControl();
  chipsCtrlAnesthetic = new FormControl();


  filteredNurse: Observable<string[]> ;
  filteredTraineeSurgent: Observable<string[]>;
  filteredAnesthetic: Observable<string[]>;

  nurse: string[] = ['Helan Ross','Alison Reid','Jeniffer Jones','Sylvia MCMillan','Maria Duncan',];
  allnurse: string[] = ['Helan Ross','Alison Reid','Jeniffer Jones','Sylvia MCMillan','Maria Duncan','Sarah Cameron','Ruth Gibson','Pamela Grant','Martha Gordon','Jessie Allan'];

  traineeSurgent: string[] = ['Dr. Chris Hunter','Dr. Helen Douglas','Dr. Janice Moore','Dr. Ellen Shaw',];
  alltraineeSurgent: string[] = ['Dr. Chris Hunter','Dr. Helen Douglas','Dr. Janice Moore','Dr. Ellen Shaw','Dr. Evleyn Gordon','Dr. Brenda Russell','Dr. Marion Kelly','Dr. Katherine Mckay','Dr. Angela Christie','Dr. Keith  Aitken'];

  anesthetic: string[] = ['Dr. Carol Anderson','Dr. Catherine White','Dr. Joan Scott','Dr. Linda Taylor',];
  allAnesthetic: string[] = ['Dr. Carol Anderson','Dr. Catherine White','Dr. Joan Scott','Dr. Linda Taylor','Dr. Shelia Walker','Dr. Andrew Miller','Dr. Daniel Duncun','Dr. Susan Mclean','Dr. Alison Christie','Dr. Gavin Bell'];

  @ViewChild('fruitInput') nurseInput: ElementRef<HTMLInputElement> | undefined;
  @ViewChild('fruitInput') traineeSurgentInput: ElementRef<HTMLInputElement> | undefined;
  @ViewChild('fruitInput') anesthetisticInput: ElementRef<HTMLInputElement> | undefined;

  constructor() {
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

}
