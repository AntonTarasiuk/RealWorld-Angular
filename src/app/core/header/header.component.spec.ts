import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from 'src/app/shared/directives/highlight.directive';
import { AuthService } from 'src/app/shared/services/auth.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{
        provide: AuthService, useValue: {
          isAuthentificated: true,
          user: {
            username: 'Test',
            image: 'Test'
          }
        }
      }],
      declarations: [ HeaderComponent, HighlightDirective ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
