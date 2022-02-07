import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  showQuote  = true;
  greet = ""
  quote = ""

name = ''
role = ''


  constructor(private auth:AuthService) {

    this.auth.getUserType().subscribe((res)=>{
      console.log("##################################");
      
      
      this.role = res['role']
      this.name = res['name']

      if (this.role == 'surgeon' || this.role == 'trainee_surgeon') {
        this.name = 'Dr '+ this.name
      }

    })

    var today = new Date()
    var curHr = today.getHours()
    this.quote = "There are only two sorts of doctors: those who practice with their brains, and those who practice with their tongues."
    
    if (curHr < 12) {
      this.greet = 'Good Morning'
    } else if (curHr < 18) {
      this.greet = 'Good Afternoon'
    } else {
      this.greet = 'Good Evening'
    }

    var day = (today).getDate().toString(); 
    console.log(day);
    console.log(this.getData("day"));
           
    if (this.getData("day") == null) {
      this.showQuote = true;
      this.setData("day",day)
      this.setData("isShow",true)
    } else {      
      if (this.getData("day") == day) {
        if (!this.getData("isShow")) {
          this.showQuote = true
          this.setData("isShow",true)
        }
      } else {
        this.showQuote = true
        this.removeData("day")
        this.removeData("isShow")
        this.setData("day",day)
        this.setData("isShow",true)
      }
    }


    // this.showQuote = true;
    
   }

  ngOnInit(): void {
  }


  setData(key:any,value:any) {
    const jsonData = JSON.stringify(value)
    localStorage.setItem(key, jsonData)
 }
 
 getData(key:any) {
    return  localStorage.getItem(key)?.replace(/['"]+/g, '') 
 }
 
 removeData(key:any) {
    localStorage.removeItem(key)
 }

}
