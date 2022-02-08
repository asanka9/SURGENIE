import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock-loading',
  templateUrl: './clock-loading.component.html',
  styleUrls: ['./clock-loading.component.scss']
})
export class ClockLoadingComponent implements OnInit {

  @Input() data:any;
  constructor() { }

  ngOnInit(): void {


    // setTimeout(() => {
    //   alert("hiiiii")
    // },
    //   5000);
  }

}
