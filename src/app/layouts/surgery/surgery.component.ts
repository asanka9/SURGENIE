import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-surgery',
  templateUrl: './surgery.component.html',
  styleUrls: ['./surgery.component.scss']
})
export class SurgeryComponent implements OnInit {
  value = 'Clear me';

  constructor() { }

  ngOnInit(): void {
  }

}
