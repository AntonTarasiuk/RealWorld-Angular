import { Component, Input, OnInit } from '@angular/core';

export interface Item {
  avatar: string,
  authorName: string,
  postDate: string,
  likes: string,
  articleName: string,
  article: string,
  tags: string[]
}

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss']
})
export class FeedItemComponent implements OnInit {

  constructor() { }
  @Input() public item!: Item;

  ngOnInit(): void {
  }

}
