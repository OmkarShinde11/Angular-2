import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Event } from '@angular/router';

@Directive({
  selector: '[appHost1]'
})
export class Host1Directive {
  
  constructor(private change:ElementRef,private ele:Renderer2) { }
  @HostListener('mouseenter') random(data:Event){
     this.ele.setStyle(this.change.nativeElement,'background-color','red')
  }

  @HostListener('mouseleave') change1(data:Event){
    this.ele.setStyle(this.change.nativeElement,'background-color','white')
  }

}
