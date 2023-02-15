import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-info',
  templateUrl: './server-info.component.html',
  styleUrls: ['./server-info.component.css'],
  // encapsulation:ViewEncapsulation.Emulated
})
export class ServerInfoComponent implements OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,OnDestroy{
  @Input()element:{type:string,name:string,content:string}
  @Input()name:string;
  @ViewChild('heading')heading:ElementRef;
  @ContentChild('content')content:ElementRef;
  constructor() {
    console.log("constructor called")
  }

  ngOnChanges(change:SimpleChanges){
    console.log(change);
  }

  ngOnInit(): void {
    console.log("onInit called");
    console.log("the view is "+ this.heading);
    console.log('the content is '+ this.content)
  }

  ngDoCheck(){
    console.log("doChanges called");
  }

  ngAfterContentInit(){
    console.log("afterContentInit called");
    console.log('the content is '+ this.content.nativeElement.textContent)

  }
  
  ngAfterContentChecked(){
    console.log("afterContentCecked called");
  }

  ngAfterViewInit(){
    console.log("afterViewInit called");
    console.log("the view is "+ this.heading.nativeElement.textContent)
  }

  ngAfterViewChecked(){
    console.log("afterViewChecked called");
  }

  ngOnDestroy(){
    console.log(" destroy called")
  }
}
