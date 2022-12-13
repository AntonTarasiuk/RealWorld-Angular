import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ LoginComponent ],
      providers: [
        {provide: AuthService, useValue: {
          login: () => {}
        }}
      ],
      errorOnUnknownElements: true,
      errorOnUnknownProperties: true 
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call login from auth service', waitForAsync(() => {
    let service = TestBed.inject(AuthService);
    const spy = spyOn(service, 'login').and.callThrough();
    component.login();
    expect(spy).toHaveBeenCalled();
  }));
});
