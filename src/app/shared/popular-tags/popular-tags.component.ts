import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Tags } from '../types';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss']
})
export class PopularTagsComponent implements OnInit {

  constructor() { }
  
  @Input() tags: Tags | null;
  @Output() onTagClick = new EventEmitter<string>();

  public clickedTagHandler(tag: string): void {
    this.onTagClick.emit(tag);
  }

  ngOnInit(): void {
  }

}
