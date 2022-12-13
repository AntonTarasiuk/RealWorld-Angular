import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { PopularTagsComponent } from './popular-tags.component';

describe('PopularTagsComponent', () => {
  let component: PopularTagsComponent;
  let fixture: ComponentFixture<PopularTagsComponent>;
  let tag: string;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should to be clicked', () => {
    component.onTagClick.subscribe(res => 
      tag = res
    );
    component.clickedTagHandler('test');
    expect(tag).toBe('test')
  });

});
