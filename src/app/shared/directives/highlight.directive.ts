import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  private currentEl: ElementRef;
  
  constructor(private el: ElementRef) {
    this.currentEl = this.el
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.currentEl.nativeElement.style.color = 'rgba(0,0,0,.6)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.currentEl.nativeElement.style.color = 'rgba(0,0,0,.3)';
  }

}
