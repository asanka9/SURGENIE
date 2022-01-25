import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

  updateCalcs(event: any) {
    if (this.selected?.getDay()) {
      this.selectedDateFormat = this.getMonth(this.selected?.getMonth()) +" "+ this.selected?.getDate().toString();


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
        return "JAN";
      case 11:
        return "JAN";
      case 12:
        return "JAN";
      default:
        return "";

    }
  }

}
