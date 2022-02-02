import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { DateRange } from '@angular/material/datepicker';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {

  sampleRange: DateRange<Date> | any;
  checked = false;

  constructor() {
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

  updateCalcsDate(event: any) {
    if (this.selected?.getDate()) {
      this.selectedDateFormat = this.getMonth(this.selected?.getMonth()) +" "+ this.selected?.getDate().toString();

    }
  }


  updateCalcs(event: any) {
    var today = new Date();
    if (this.selected?.getDate()) {


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

}
