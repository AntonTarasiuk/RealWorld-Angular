import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from 'src/app/shared/directives/highlight.directive';
import { TruncatePipe } from 'src/app/shared/pipes/truncate.pipe';

import { FeedItemComponent } from './feed-item.component';

describe('FeedItemComponent', () => {
  let component: FeedItemComponent;
  let fixture: ComponentFixture<FeedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedItemComponent, HighlightDirective, TruncatePipe ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedItemComponent);
    component = fixture.componentInstance;
    component.article = {
      slug: "string",
      title: "string",
      description: "string",
      body: "string",
      tagList: [],
      createdAt: "Jun 15, 2015, 9:03:01 AM",
      updatedAt: "Jun 15, 2015, 9:03:01 AM",
      favorited: true,
      favoritesCount: 1.618,
      author: {
          username: "string",
          bio: "string",
          image: "string",
          following: true
      }
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
