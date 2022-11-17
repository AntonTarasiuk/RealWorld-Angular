import { Component, OnInit } from '@angular/core';
// import { Item } from '../feature/feed-item/feed-item.component';
// import itemArray from "../../sourceFld/itemArray.json"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-progect';
  
  // public items: Item[] = itemArray

  constructor (){}

  // selectedItem?: string;

  // setSelectedItem(item: string) {
  //   this.selectedItem = item;
  // }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
