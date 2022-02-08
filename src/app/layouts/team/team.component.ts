import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { map, startWith } from 'rxjs/operators';
import { MatChipInputEvent } from '@angular/material/chips';
import { TeamService } from 'src/app/services/team.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private team:TeamService,private toastr: ToastrService) {


    this.team.getTeamdetails().subscribe((res)=>{

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


    },(err)=>{

    })

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
    return names[1].toLowerCase()+names[2].toLowerCase()+'@gmail.com'
  }

  getTelephone(index:any){
    let telephones = ['77 323 343 6','76 454 343 4']
    return telephones[Number(index)%2]
  }



  



  saveMyTeam(){
    this.team.createTeam({'trainee_surgeon':this.traineeSurgent,'nurse':this.nurse,'anesthesiologists':this.anesthetic}).subscribe((res)=>{
      window.location.reload()

      this.toastr.success( 'Your Team Saved Successfully','Saved Successfully', {
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
  
      });
    },(err)=>{
      this.toastr.error('Try again', 'Something Went Wrong', {
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
  
      });
    }
    
    )
  }

}
