import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[col-offset]'
})
export class ColOffsetDirective {

  @Input()
  set coloffset(offset: number) {
    if (offset != 0) {
      this.el.nativeElement.style.marginLeft = '20px';
    }
  }

  constructor(private el: ElementRef) {}
}