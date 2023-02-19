import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontroller',
  templateUrl: './gamecontroller.component.html',
  styleUrls: ['./gamecontroller.component.css']
})
export class GamecontrollerComponent implements OnInit {
  @Output() game=new EventEmitter();
  // @Output() stopGame=new EventEmitter();
  // @Output() resetgame=new EventEmitter()
  random;
  @Input()increment:number;
  constructor() { }

  ngOnInit(): void {
  }
  start(){
    this.random=setInterval(()=>{
      this.game.emit(this.increment+1);
      this.increment++;
    },1000)
  }
  stop(){
    clearInterval(this.random);
    
  }
  reset(){
    this.increment=0
  }
  
}
