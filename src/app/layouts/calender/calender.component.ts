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


  movies = [
    {
      "name":"Appendectomy Surgery",
      "description":"Lorem ipsum dolor sit sit amet consectetur adipisicing elit. Cupiditate culpa dolore beatae amet quisquam aspernatur quaerat laudantium. Qui eaque, voluptatibus em ipsum dolor sit amet consectetur adipisicing elit. Cupiditate culpa dol amet consectetur adipisicing elit. Cupiditate culpa dolore beatae amet quisquam aspernatur quaerat laudantium. Qui eaque, voluptatibus em ipsum dolor sit amet consectetur adipisicing elit. Cupiditate culpa dolore beatae amet quisquam aspernatur quaerat laudantium. Qui eaque, voluptatibus i inventore quide"
    },
    {
      "name":"Appendectomy Surgery",
      "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate culpa dolore beatae amet quisquam aspernatur quaerat laudantium. Qui eaque, voluptatibus inventore quide"
    },
    {
      "name":"Appendectomy Surgery",
      "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate culpa dolore beatae amet quisquam aspernatur quaerat laudantium. Qui eaque, voluptatibus inventore quide"
    },
    {
      "name":"Appendectomy Surgery",
      "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate culpa dolore beatae amet quisquam aspernatur quaerat laudantium. Qui eaque, voluptatibus inventore quide"
    }
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}
