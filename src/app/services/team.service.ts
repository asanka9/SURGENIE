import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  api_url = "http://127.0.0.1:8000/";
  constructor(private http : HttpClient, private _router : Router) { }


  getTeamdetails()  {
    var data = {"key":localStorage.getItem('token')};
    return this.http.post<any>(this.api_url + 'team/team-detail/',data);
  }

  createTeam(favTeam:any){
    var data = {"key":localStorage.getItem('token'),"favTeam":favTeam};
    return this.http.post<any>(this.api_url + 'team/create-team/',data);
  }

}