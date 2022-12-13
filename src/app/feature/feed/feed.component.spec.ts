import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppComponent } from 'src/app/core/app.component';
import { PopularTagsComponent } from 'src/app/shared/popular-tags/popular-tags.component';
import { DataService } from 'src/app/shared/services/data.service';
import { BannerComponent } from '../banner/banner.component';

import { FeedComponent } from './feed.component';

describe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        FeedComponent, 
        BannerComponent,
        PopularTagsComponent 
      ],
      providers: [
        {provide: DataService, useValue: {
          getTags: () => of([]),
          getArticles: () => of([])
        }}
      ],
      errorOnUnknownElements: true,
      errorOnUnknownProperties: true 
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should process click on tag', () => {
    component.clickedTag("test");
    expect(component.isActive).toBeTruthy();
    expect(component.newFeedTag).toBe("#test");
  });
});
