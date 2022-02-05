import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { DateRange } from '@angular/material/datepicker';
import { SurgeryService } from 'src/app/services/surgery.service';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {

  sampleRange: DateRange<Date> | any;
  checked = false;

  constructor(private surgery:SurgeryService) {
    this.refreshDR();
  }

  refreshDR() {
    this.sampleRange = new DateRange(new Date(),new Date());
  }

  onChange(ev: any) {
    console.log(`cal onChange:`, ev);
  }

  ngOnInit(): void {
    var today = new Date();

    this.selectedDateFormat = this.getMonth(today?.getMonth()) +" "+ today?.getDate().toString()


      this.surgery_times = []
      this.surgery.getBookDate({'date':today?.getDate(),'month':today?.getMonth(),'year':2022}).subscribe((res)=>{

        if (res['user']=='surgeon') {
          this.show_more_details = true
          this.is_surgeon = true
          res['data'].forEach((element: any) => {
            this.surgery_times.push(
              {
                'time_text':element['time_text'],
                'patien_detail':{
                  'patient_name':element['patient_details']['patient_name'],
                  'email':element['patient_details']['email'],
                  'notes':element['patient_details']['notes'],
                  'telephone':element['patient_details']['telephone']
                }
              }
            )
          });
        }


        var patient_detail = this.surgery_times[0]['patien_detail']
        this.header_time = this.surgery_times[0]['time_text']
        this.patient_name = patient_detail['patient_name']
        this.patient_email = patient_detail['email']
        this.patient_notes = patient_detail['notes']
        this.patient_telephones = patient_detail['telephone']

      })
    
























  }


  selected: Date | null | undefined;
  selectedDateFormat: string | undefined;

  movies = [
    {
      "name": "Appendectomy Surgery",
      "description": "Lorem ipsum dolor sit sit amet consectetur adipisicing elit. Cupiditate culpa dolore beatae amet quisquam aspernatur quaerat laudantium. Qui eaque, voluptatibus em ipsum dolor sit amet consectetur adipisicing elit. Cupiditate culpa dol amet consectetur adipisicing elit. Cupiditate culpa dolore beatae amet quisquam aspernatur quaerat laudantium. Qui eaque, voluptatibus em ipsum dolor sit amet consectetur adipisicing elit. Cupiditate culpa dolore beatae amet quisquam aspernatur quaerat laudantium. Qui eaque, voluptatibus i inventore quide"
    },
    {
      "name": "Appendectomy Surgery",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate culpa dolore beatae amet quisquam aspernatur quaerat laudantium. Qui eaque, voluptatibus inventore quide"
    },
    {
      "name": "Appendectomy Surgery",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate culpa dolore beatae amet quisquam aspernatur quaerat laudantium. Qui eaque, voluptatibus inventore quide"
    },
    {
      "name": "Appendectomy Surgery",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate culpa dolore beatae amet quisquam aspernatur quaerat laudantium. Qui eaque, voluptatibus inventore quide"
    }
  ];


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }



  show_more_details = false
  is_surgeon = false

  surgery_times :any = []
  patient_detail : any

  updateCalcsDate(event: any) {
    if (this.selected?.getDate()) {
      this.selectedDateFormat = this.getMonth(this.selected?.getMonth()) +" "+ this.selected?.getDate().toString();
      this.surgery_times = []
      this.surgery.getBookDate({'date':this.selected?.getDate(),'month':this.selected?.getMonth(),'year':2022}).subscribe((res)=>{

        if (res['user']=='surgeon') {
          this.show_more_details = true
          this.is_surgeon = true
          res['data'].forEach((element: any) => {
            this.surgery_times.push(
              {
                'time_text':element['time_text'],
                'patien_detail':{
                  'patient_name':element['patient_details']['patient_name'],
                  'email':element['patient_details']['email'],
                  'notes':element['patient_details']['notes'],
                  'telephone':element['patient_details']['telephone']
                }
              }
            )
          });
        }


        var patient_detail = this.surgery_times[0]['patien_detail']
        this.header_time = this.surgery_times[0]['time_text']
        this.patient_name = patient_detail['patient_name']
        this.patient_email = patient_detail['email']
        this.patient_notes = patient_detail['notes']
        this.patient_telephones = patient_detail['telephone']

      })
    }
  }

  header_time = ''
  patient_name = ''
  patient_email = ''
  patient_notes = ''
  patient_telephones = ''

  patientDetail(index:any){
    this.patient_detail =  this.surgery_times[index]['patien_detail']
    this.patient_name = this.patient_detail['patient_name']
    this.patient_email = this.patient_detail['email']
    this.patient_notes = this.patient_detail['notes']
    this.patient_telephones = this.patient_detail['telephone']
  }

  previouSelectedDate : Date | any

  updateCalcs(event: any) {
    var today = new Date();
    if (this.selected?.getDate()) {
      if (this.previouSelectedDate?.getDate() == this.selected.getDate()) {
      } else {
        if (today < this.selected ) {
          this.selectedDateFormat = this.getMonth(today?.getMonth()) +" "+ today?.getDate().toString()+" - "+this.getMonth(this.selected?.getMonth()) +" "+ this.selected?.getDate().toString();
          this.sampleRange = new DateRange((() => {
            let v = new Date();
            v.setDate(v.getDate());
            return v;
          })(),this.selected);
        } else {
          this.selectedDateFormat = this.getMonth(this.selected?.getMonth()) +" "+ this.selected?.getDate().toString() +" - "+this.getMonth(today?.getMonth()) +" "+ today?.getDate().toString();
  
          this.sampleRange = new DateRange(this.selected,(() => {
            let v = new Date();
            v.setDate(v.getDate());
            return v;
          })());
        }
      }

    }
  }

  getMonth(num: Number) {
    switch (num) {
      case 0:
        return "JAN";
      case 1:
        return "FEB";
      case 2:
        return "MARCH";
      case 3:
        return "APRIL";
      case 4:
        return "MAY";
      case 5:
        return "JUNE";
      case 6:
        return "JULY";
      case 7:
        return "AUG";
      case 8:
        return "SEP";
      case 9:
        return "OCT";
      case 10:
        return "Nov";
      case 11:
        return "Dec";
      default:
        return "";

    }
  }


  getDate(){

  }

}
