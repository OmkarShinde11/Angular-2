import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
   id:number=0;
  constructor(private activatedRoute:ActivatedRoute) { }

 
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      const value=params;
      this.id=value.id;
    })
  }

}
