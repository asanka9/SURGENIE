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
  options: string[] = [
    'Dissecting forceps', 'Hinged forceps', 'Clamp', 'Probe', 'Handheld retractor', 'Self-retaining retractor', 'Scissor', 'Scalpel', 'Diathermy', 'Dilator'
  ];

  units: string[] = ['1', '2', '3'];
  theortors: string[] = ['icu 1', 'icu 2', 'icu 3'];

  filteredOptions: Observable<string[]> | any;
  value = "";

  ngOnInit() {
    this.filteredOptions = this.resourceNameFormControl.valueChanges.pipe(
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
    {value: 'all', viewValue: 'All'},
    {value: 'theater-1', viewValue: 'Theater 01'},
    {value: 'theater-2', viewValue: 'Theater 02'},
    {value: 'theater-3', viewValue: 'Theater 03'},
    {value: 'theater-4', viewValue: 'Theater 04'},
    {value: 'theater-5', viewValue: 'Theater 05'},

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
      this.toastr.success('Added Successfully', 'Resource Added successfully', {
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
  
      });
    },(err)=>{
      this.toastr.error('Something Went Wrong', 'Try Again', {
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
