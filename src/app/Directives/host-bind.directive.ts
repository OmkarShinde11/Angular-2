import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { Event } from '@angular/router';

@Directive({
  selector: '[appHostBind]'
})
export class HostBindDirective {
  @Input()fadeIn:string;
  @Input()fadeOut:string;
  @HostBinding('style.backgroundColor') firstUse:string
  constructor() { }
  @HostListener('mouseover') random(data:Event){
    this.firstUse=this.fadeIn
  }
  @HostListener('mouseleave') change1(data:Event){
    this.firstUse=this.fadeOut
  }
}

// here we use @input to take color form outside component