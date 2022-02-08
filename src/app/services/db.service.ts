import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  api_url = "https://surgenie.herokuapp.com/";
  constructor(private http : HttpClient, private _router : Router) { }

  addResource(resource:any){
    var data = {"key":localStorage.getItem('token'), "resource":resource};
    return this.http.post<any>(this.api_url + 'hospital/add-resource/',data);
  }


  viewResource(){
    var data = {"key":localStorage.getItem('token')};
    return this.http.post<any>(this.api_url + 'hospital/view-resources/',data);
  }


  viewNurse(){
    var data = {"key":localStorage.getItem('token')};
    return this.http.post<any>(this.api_url + 'hospital/all-nurse/',data);
  }

  viewSurgeon(){
    var data = {"key":localStorage.getItem('token')};
    return this.http.post<any>(this.api_url + 'hospital/all-surgeon/',data);
  }

  viewTraineeSurgeon(){
    var data = {"key":localStorage.getItem('token')};
    return this.http.post<any>(this.api_url + 'hospital/all-trainee-surgeon/',data);
  }

  viewAnesthelogist(){
    var data = {"key":localStorage.getItem('token')};
    return this.http.post<any>(this.api_url + 'hospital/all-anesthelogist/',data);
  }

  viewadmin(){
    var data = {"key":localStorage.getItem('token')};
    return this.http.post<any>(this.api_url + 'hospital/all-admin/',data);
  }

}
