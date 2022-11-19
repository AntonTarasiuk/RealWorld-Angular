import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserUpdate } from 'src/app/shared/types';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {

  constructor(public authServic: AuthService) { }

  public settingsFormGroup: FormGroup = new FormGroup({
    userPictureURL: new FormControl('', [ 
      Validators.minLength(10)
    ]),
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(2), 
      Validators.maxLength(100)
    ]),
    userAbout: new FormControl('', [
      Validators.minLength(2), 
      Validators.maxLength(2500)
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

  get userPictureURL() { 
    return this.settingsFormGroup.get('userPictureURL'); 
  }
  get userName() { 
    return this.settingsFormGroup.get('userName'); 
  }
  get userAbout() { 
    return this.settingsFormGroup.get('userAbout'); 
  }
  get userEmail() { 
    return this.settingsFormGroup.get('userEmail'); 
  }
  get userPassword() { 
    return this.settingsFormGroup.get('userPassword'); 
  }
  
  ngOnInit(): void {
    this.authServic.getUser().subscribe({
      next: (res: any) => {
        console.log(res)
        const { email, username, bio, image } = res.user
        this.userEmail?.setValue(email);
        this.userName?.setValue(username);
        this.userPictureURL?.setValue(image);
        this.userAbout?.setValue(bio);
      }
    })
  }
  
  public onSubmit(): any {
    this.settingsFormGroup.reset();
  }

}
