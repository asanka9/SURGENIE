import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { DbService } from 'src/app/services/db.service';


@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.scss']
})
export class AddResourceComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  units: string[] = ['1', '2', '3'];
  theortors: string[] = ['icu 1', 'icu 2', 'icu 3'];

  filteredOptions: Observable<string[]> | any;
  value = "";

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

  selectedValue: string | any;
  selectedCar: string | any ;

  resources: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  icus: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  unitsResource: Food[] = [
    {value: 'ml', viewValue: 'Milliliters'},
    {value: 'mg', viewValue: 'Milligrams'},
    {value: 'pcs', viewValue: 'Pieces'},
  ];


  cars: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'},
  ];




  // form controls
  resourceNameFormControl = new FormControl('', [Validators.required]);
  amountFormControl = new FormControl('', [Validators.required]);
  unitFormControl = new FormControl('', [Validators.required]);
  theartorFormControl = new FormControl('', [Validators.required]);


  constructor(private db:DbService,private toastr: ToastrService){}


  addResource(){
    var resource = {
      'name':this.resourceNameFormControl.value,
      'amount':this.amountFormControl.value,
      'unit':this.unitFormControl.value
    }
    this.db.addResource(resource).subscribe((res)=>{
      this.resourceNameFormControl.reset()
      this.amountFormControl.reset()
      this.unitFormControl.reset()
      this.theartorFormControl.reset()
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

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}
