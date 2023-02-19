import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd-even',
  templateUrl: './odd-even.component.html',
  styleUrls: ['./odd-even.component.css']
})
export class OddEvenComponent implements OnInit {

  constructor() { }
  numbers=[1,2,3,4,5,6,7,8,9];
  onlyadd:boolean=false
  oddNumber=[1,3,5,7,9];
  evenNumber=[2,4,6,8,10]

  ngOnInit(): void {
  }

}
