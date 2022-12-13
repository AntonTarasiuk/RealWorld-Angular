import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

import { SettingsPageComponent } from './settings-page.component';

describe('SettingsPageComponent', () => {
  let component: SettingsPageComponent;
  let fixture: ComponentFixture<SettingsPageComponent>;
  const userBody = {
    bio: 'test',
    email: 'test',
    image: 'test',
    token: 'test',
    username: 'test',
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ SettingsPageComponent ],
      providers: [
        {provide: AuthService, useValue: {
          getUser: () => of(userBody)
        }}
      ],
      errorOnUnknownElements: true,
      errorOnUnknownProperties: true 
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
