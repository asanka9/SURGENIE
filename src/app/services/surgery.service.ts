import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SurgeryService {

  api_url = "http://127.0.0.1:8000/";
  constructor(private http : HttpClient, private _router : Router) { }


  getPredictedTime(patientDetails:any){
    var data = {"key":localStorage.getItem('token'),"patient_details":patientDetails};
    return this.http.post<any>(this.api_url + 'surgery/predict-time/',data);
  }

  createSurgeryWithShedule(patientDetails:any,surgery_details:any,surgery_team_details:any){
    var data = {"key":localStorage.getItem('token'),"patient_details":patientDetails,
    "surgery_details":surgery_details,"surgery_team_details":surgery_team_details};
    return this.http.post<any>(this.api_url + 'surgery/create-surgery/',data);
  }

  getBookDate(day:any){
    var data = {"key":localStorage.getItem('token'),"day":day};
    return this.http.post<any>(this.api_url + 'booked/booked-date/',data);
  }






}
