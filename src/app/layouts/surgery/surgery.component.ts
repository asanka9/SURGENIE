import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { map, startWith } from 'rxjs/operators';
import { MatChipInputEvent } from '@angular/material/chips';
import { MyErrorStateMatcher } from '../add-user/add-user.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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
  options: string[] = ['One', 'Two', 'Three'];
  resources: string[] = ['Resource', 'Resource', 'Resource'];

  filteredOptions: Observable<string[]> | undefined;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  firstNameFormControl = new FormControl('', [Validators.required]);
  lastNameFormControl = new FormControl('', [Validators.required]);
  telephoneFormControl = new FormControl('', [Validators.required]);
  addressFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  value = 'Clear me';


  columns: string[] = ['resource', 'amount', 'predicted', 'estimated'];
  dataSource = ELEMENT_DATA;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

}
