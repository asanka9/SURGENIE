import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private authService : AuthService,private toastr: ToastrService) {
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
      this.toastr.success('Login Successfully', '', {
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
  
      });   
    },
    err=>{
      this.toastr.error('Invalid Credintials', '', {
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
  
      }); 
    }
    )
  }

}
