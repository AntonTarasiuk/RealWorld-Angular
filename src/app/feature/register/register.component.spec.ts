import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ RegisterComponent ],
      providers: [
        {provide: AuthService, useValue: {
          register: () => of({})
        }}
      ],
      errorOnUnknownElements: true,
      errorOnUnknownProperties: true 
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call register from auth service', () => {
    const servise = TestBed.inject(AuthService);
    const spy = spyOn(servise, 'register').and.callThrough();
    component.register();
    expect(spy).toHaveBeenCalled();
  });
});
