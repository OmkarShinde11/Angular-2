import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetter]'
})
export class BetterDirective implements OnInit{

  constructor(private ele:ElementRef,private change:Renderer2) { }

  ngOnInit(){
      this.change.setStyle(this.ele.nativeElement,'background-color','orange');
  }
}
