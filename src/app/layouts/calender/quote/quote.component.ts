import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  showQuote  = false;
  greet = ""
  quote = ""

  constructor() {

    var today = new Date()
    var curHr = today.getHours()
    this.quote = "There are only two sorts of doctors: those who practice with their brains, and those who practice with their tongues."
    
    if (curHr < 12) {
      this.greet = 'Good Morning '+"Dr Arun" 
    } else if (curHr < 18) {
      this.greet = 'Good Afternoon '+"Dr Arun" 
    } else {
      this.greet = 'Good Evening '+"Dr Arun" 
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
