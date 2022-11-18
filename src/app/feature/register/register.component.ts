import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Registr } from 'src/app/shared/types';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public authServic: AuthService) { }

  public registerFormGroup: FormGroup = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(2), 
      Validators.maxLength(100)
    ]),
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

  get userName() { 
    return this.registerFormGroup.get('userName'); 
  }
  get userEmail() { 
    return this.registerFormGroup.get('userEmail'); 
  }
  get userPassword() { 
    return this.registerFormGroup.get('userPassword'); 
  }
  
  // public onSubmit() {
  //   console.log("Successfuly");
  // }
  
  ngOnInit(): void {
  }
  
  public regitre(): any {
    const registerBody: Registr = {
      user: {
        username: this.userName?.value,
        email: this.userEmail?.value,
        password: this.userPassword?.value
      }
    }
    this.authServic.regitre(registerBody)
    this.registerFormGroup.reset();
  }

}
