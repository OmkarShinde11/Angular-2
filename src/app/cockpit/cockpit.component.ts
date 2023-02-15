import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  serverName='';
  serverContent='';
  @Output() serverCreated = new EventEmitter<{name:string,content:string,type:string}>();
  @Output() bluePrintCreated= new EventEmitter<{name:string,content:string,type:string}>();
  @ViewChild('serverName') serverNameInput:ElementRef;
  @ViewChild('serverContent') serverContentInput:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  addServer(){
    // console.log(this.serverNameInput.nativeElement.value)
    // console.log(data.value)
    this.serverCreated.emit({
      type:'server',
      name:this.serverNameInput.nativeElement.value,
      content:this.serverContentInput.nativeElement.value,
    })
  }

  addBluePrint(){
    this.bluePrintCreated.emit({
      type:'blueprint',
      name:this.serverNameInput.nativeElement.value,
      content:this.serverContentInput.nativeElement.value,
    })
  }

}
