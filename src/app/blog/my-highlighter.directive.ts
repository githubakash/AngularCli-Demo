import { Directive,ElementRef,Input,HostListener } from '@angular/core';

@Directive({
  selector: '[appMyHighlighter]'
})
export class MyHighlighterDirective {

 private el:ElementRef;
 
 @Input()
 color:string
  constructor(elref:ElementRef) {
     
     this.el = elref;
     console.log('elementRef Service - ' + this.el);
  // el.nativeElement.style.backgroundColor = "green";

  }
  
   @HostListener('mouseenter') 
   onMouseEnterAkash() {
    this.highlight(this.color);
  }

  @HostListener('mouseleave')
   onMouseLeaveAkash1() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
