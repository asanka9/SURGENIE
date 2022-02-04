import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map} from 'rxjs/operators';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api_url = "http://127.0.0.1:8000/";
  constructor(private http : HttpClient, private _router : Router) { }

  login(username : string, password : string){
    return this.http.post<any>(this.api_url + 'user/api-auth/',{username, password}, httpOptions).
    pipe(map(user =>{
      if (user && user.token) {
        localStorage.setItem('token', user.token)
        this._router.navigate(['']).then(() => {
          window.location.reload();
        });

      }
      return user;
    }));
  }

  registerUser(register_data:any){
    this.http.post<any>(this.api_url + 'user/register/',register_data).subscribe(data=>{
      //this._router.navigate(['/login'])
    })
  }

  updateUser(register_data:any){
    var data = {"key":localStorage.getItem('token'),"user":register_data};
    this.http.post<any>(this.api_url + 'user/update/',data).subscribe(data=>{
      //this._router.navigate(['/login'])
    })
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn()  {
    var data = {"key":localStorage.getItem('token')};
    return this.http.post<any>(this.api_url + 'user/verify-token/',data);
  }

  getUserInfo(){
    var data = {"key":localStorage.getItem('token')};
    return this.http.post<any>(this.api_url + 'user/user-info/',data);
  }

}