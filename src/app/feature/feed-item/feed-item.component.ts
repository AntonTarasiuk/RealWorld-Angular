import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/types';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss']
})
export class FeedItemComponent implements OnInit {

  constructor() { }
  @Input() public article!: Article;

  ngOnInit(): void {
  }

}
