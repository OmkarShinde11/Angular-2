import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasic]'
})
export class BasicDirective implements OnInit {
  
  constructor(private change:ElementRef) { }
  ngOnInit(){
    this.change.nativeElement.style.backgroundColor='green'
  }
}
