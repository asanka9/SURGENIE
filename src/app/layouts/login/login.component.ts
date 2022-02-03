import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private authService : AuthService) {
    this.loginForm = new FormGroup(
      {
        username : new FormControl(''),
        password : new FormControl('')
      }
    );

   }

  ngOnInit(): void {

  }

  get f(){
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.authService.login(this.f.username.value, this.f.password.value).pipe((first())).subscribe(res=>{
      localStorage.setItem("token",res['token'])      
    })
  }

}
