import { Component, OnInit, Input } from '@angular/core';

import { DataService } from 'src/app/shared/services/data.service';
import { forkJoin, Observable } from 'rxjs';
import { Article, Tags } from 'src/app/shared/types';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  constructor(public data: DataService) { }

  public newFeedTag!: string;
  public tags!: Observable<Tags>;
  public articles!: Observable<Article[]>;

  @Input() isActive: boolean = false;

  clickedTag(tag: string): void {
    this.isActive = true;
    this.newFeedTag = `#${tag}`;
  }

  onFeedClick(): void {
    this.isActive = !this.isActive;
  }

  ngOnInit(): void {
    forkJoin([
      this.tags = this.data.getTags(),
      this.articles = this.data.getArticles()
    ])
  }

}
