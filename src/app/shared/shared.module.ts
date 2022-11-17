import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './tag/tag.component';
import { PopularTagsComponent } from './popular-tags/popular-tags.component';
import { HighlightDirective } from './directives/highlight.directive';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [
    TagComponent,
    PopularTagsComponent,
    HighlightDirective,
    TruncatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TagComponent,
    PopularTagsComponent,
    HighlightDirective,
    TruncatePipe
  ]
})
export class SharedModule { }
