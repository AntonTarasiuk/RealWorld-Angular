import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import arrayOfTags from "../../../sourceFld/arrayOfTags.json"

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss']
})
export class PopularTagsComponent implements OnInit {

  constructor() { }

  public arrayOfTags: string[] = arrayOfTags;
  
  @Output() onTagClick = new EventEmitter<string>();

  public clickedTagHandler(tag: string): void {
    this.onTagClick.emit(tag);
  }

  ngOnInit(): void {
  }

}
