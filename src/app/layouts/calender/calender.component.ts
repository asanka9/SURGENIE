import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { DateRange } from '@angular/material/datepicker';
import { AuthService } from 'src/app/services/auth.service';
import { SurgeryService } from 'src/app/services/surgery.service';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {

  sampleRange: DateRange<Date> | any;
  checked = false;

  constructor(private auth:AuthService) {
    this.refreshDR();
  }

  refreshDR() {
    this.sampleRange = new DateRange(new Date(),new Date());
  }

  onChange(ev: any) {
    console.log(`cal onChange:`, ev);
  }

  list_of_surgery_date = [
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'patient_address':'adress',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    },
    {
      'surgery_name':'Knee Surgery',
      'time_text':'2 P.M  -  4 P.M',
      'surgeon':'Dr Ruchira Dias',
      'patient_detail':{
        'patient_email':'arund@gmail.com',
        'patient_name':'Arun Fernendo',
        'patient_telephone':'77 545 544 4',
        'notes':'some notes'
      }
    }
  ]


  surgeries_count = 0
  getUnique(count:number) {
    // Make a copy of the array
    var tmp = this.list_of_surgery_date;
    var ret = [];
    
    for (var i = 0; i < count; i++) {
      var index = Math.floor(Math.random() * tmp.length);
      var removed = tmp.splice(index, 1);
      // Since we are only removing one element
      ret.push(removed[0]);
    }
    this.surgeries_count = ret.length
    //this.patientDetail(0)
    return ret;  
  }

  userRole = ''
  ngOnInit(): void {
    var today = new Date();

    this.auth.getUserType().subscribe((res)=>{
      this.userRole = res
    })

    this.selectedDateFormat = this.getMonth(today?.getMonth()) +" "+ today?.getDate().toString()
    this.surgery_times = this.getUnique(3)


    this.patient_name = this.surgery_times[0]['patient_detail']['patient_name']
    this.patient_email = this.surgery_times[0]['patient_detail']['patient_email']
    this.patient_telephones = this.surgery_times[0]['patient_detail']['patient_telephone']


  
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

  // get book detail with date
  updateCalcsDate(event: any) {
    if (this.selected?.getDate()) {
      this.selectedDateFormat = this.getMonth(this.selected?.getMonth()) +" "+ this.selected?.getDate().toString();
      this.surgery_times = this.getUnique(3)      
    }
  }

  patient_name = ''
  patient_email = ''
  patient_notes = ''
  patient_telephones = ''


  // 'patient_email':'arund@gmail.com',
  // 'patient_name':'Arun Fernendo',
  // 'patient_telephone':'77 545 544 4',
  // 'notes':'some notes'

  patientDetail(index:any){
    
    index = Number(index)

    this.patient_name = this.surgery_times[index]['patient_detail']['patient_name']
    this.patient_email = this.surgery_times[index]['patient_detail']['patient_email']
    this.patient_telephones = this.surgery_times[index]['patient_detail']['patient_telephone']


    // this.patient_email = this.surgery_times[index]['patien_detail']['patient_email']
    // this.patient_name = this.surgery_times[index]['patien_detail']['patient_name']
    // this.patient_email = this.surgery_times[index]['patien_detail']['patient_email']
    // this.patient_notes = this.surgery_times[index]['patien_detail']['patient_notes']
    // this.patient_telephones = this.surgery_times[index]['patien_detail']['patient_telephone']
  }

  previouSelectedDate : Date | any

  // get book detail with date range
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

          this.surgery_times = this.getUnique(3)
 
        } else {
          this.selectedDateFormat = this.getMonth(this.selected?.getMonth()) +" "+ this.selected?.getDate().toString() +" - "+this.getMonth(today?.getMonth()) +" "+ today?.getDate().toString();
  
          this.sampleRange = new DateRange(this.selected,(() => {
            let v = new Date();
            v.setDate(v.getDate());
            return v;
          })());

          // get booked information
          this.surgery_times = this.getUnique(3)
  
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
