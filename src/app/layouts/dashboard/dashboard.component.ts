import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private auth:AuthService,private r:Router) { }

  role = ''
  name = ''
  ngOnInit(): void {
    this.auth.getUserType().subscribe((res)=>{
      console.log("##################################");
      
      console.log(res);
      
      this.role = res['role']
      this.name = res['name']

    })
  }


  calender(){
    this.r.navigate(['calender'])
  }


}
