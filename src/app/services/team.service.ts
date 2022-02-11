import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  api_url = "https://surgenie.herokuapp.com/";
  constructor(private http : HttpClient, private _router : Router) { }


  getTeamdetails()  {
    var data = {"key":localStorage.getItem('token')};
    return this.http.post<any>(this.api_url + 'team/team-detail/',data);
  }

  createTeam(favTeam:any){
    var data = {"key":localStorage.getItem('token'),"favTeam":favTeam};
    return this.http.post<any>(this.api_url + 'team/create-team/',data);
  }

  bookTeam(favTeam:any,surgery_details:any){
    var data = {"key":localStorage.getItem('token'),"favTeam":favTeam,"surgery_details":surgery_details};
    return this.http.post<any>(this.api_url + 'team/book-team/',data);
  }

}
