import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { SurgeryService } from 'src/app/services/surgery.service';
import { FormControl } from '@angular/forms';



export interface PeriodicElement {
  id:number;
  Name: string;
  Day: string;
  Time: string;
  Completed: boolean;
  patient_details: PatientDetail;
}

export interface PatientDetail {
  patient_name: string;
  email: string;
  notes: string;
}

@Component({
  selector: 'app-surgery-details',
  templateUrl: './surgery-details.component.html',
  styleUrls: ['./surgery-details.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class SurgeryDetailsComponent implements OnInit {




  ELEMENT_DATA: PeriodicElement[] | undefined 
  
  dataSource :any;
  columnsToDisplay = ['Name', 'Day', 'Time', 'Completed'];
  expandedElement: PeriodicElement | null | undefined;

  constructor(private surgery:SurgeryService) {

    this.surgery.getSurgerList().subscribe((res)=>{

      this.ELEMENT_DATA = res
      
      this.dataSource = this.ELEMENT_DATA


    })

   }

  ngOnInit(): void {

  }



  real_value = new FormControl()

  addRealTime(id:any){
    this.real_value.reset()
    this.surgery.setSurgeryUpdate(Number(id)).subscribe((res)=>{
      this.surgery.getSurgerList().subscribe((res)=>{

        this.ELEMENT_DATA = res
        
        this.dataSource = this.ELEMENT_DATA
  
  
      })
    })
  }



}
