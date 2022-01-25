import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { map, startWith } from 'rxjs/operators';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {


  separatorKeysCodes: number[] = [ENTER, COMMA];

  chipsCtrlNurse = new FormControl();
  chipsCtrlTraineeSurgent = new FormControl();
  chipsCtrlAnesthetic = new FormControl();


  filteredNurse: Observable<string[]> ;
  filteredTraineeSurgent: Observable<string[]>;
  filteredAnesthetic: Observable<string[]>;

  nurse: string[] = ['Lemon'];
  allnurse: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  traineeSurgent: string[] = ['Lemon'];
  alltraineeSurgent: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  anesthetic: string[] = ['Lemon'];
  allAnesthetic: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

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
  ngOnInit(): void {
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
}
