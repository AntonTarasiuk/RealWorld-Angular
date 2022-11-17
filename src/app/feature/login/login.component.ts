import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

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
  
  public onSubmit() {
    console.log("Successfuly!");
    this.loginFormGroup.reset();
  }

  ngOnInit(): void {
  }

}
