import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor() { }

  isSignedIn = false
  // @Output() handleLoginState = new EventEmitter<any>();

  ngOnInit(): void {
    // if(localStorage.getItem('user_1')!== null)
    // {
    //   this.isSignedIn= true
    //   this.handleLoginState.emit(true)
    // }
    // else
    // {
    //   this.isSignedIn= false
    //   this.handleLoginState.emit(false)
    // }
  }


  async onSignin(email:string,password:string){
    // await this.firebaseService.signin(email,password)
    // if(this.firebaseService.isLoggedIn)
    // {
    //   this.isSignedIn = true
    //   this.handleLoginState.emit(true)
    // }
  }

  handleLogout(){
    this.isSignedIn = false

  }
}
