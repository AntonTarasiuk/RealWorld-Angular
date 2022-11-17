import { Component, OnInit, Input } from '@angular/core';

import { Item } from '../feed-item/feed-item.component';
import itemArray from "../../../sourceFld/itemArray.json"

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  constructor() { }

  public items: Item[] = itemArray
  public newFeedTag!: string;

  @Input() isActive: boolean = false;

  clickedTag(tag: string): void {
    this.isActive = true;
    this.newFeedTag = `#${tag}`;
  }

  onFeedClick(): void {
    this.isActive = !this.isActive;
  }

  ngOnInit(): void {
  }

}
