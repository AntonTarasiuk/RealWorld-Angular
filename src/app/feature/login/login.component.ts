import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Login } from 'src/app/shared/types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authServic: AuthService) {}
  
  public loginFormGroup: FormGroup = new FormGroup({
    userEmail: new FormControl('', [
      Validators.required,
      Validators.minLength(10), 
      Validators.maxLength(100)
    ]),
    userPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(16), 
      Validators.maxLength(25)
    ])
  })
  
  get userEmail() { 
    return this.loginFormGroup.get('userEmail'); 
  }
  get userPassword() { 
    return this.loginFormGroup.get('userPassword'); 
  }
  
  ngOnInit(): void {
  }
  
  public login(): any {
    const loginBody: Login = {
      user: {
        email: this.userEmail?.value,
        password: this.userPassword?.value
      }
    }
    this.authServic.login(loginBody);
    this.loginFormGroup.reset();
  }

}
