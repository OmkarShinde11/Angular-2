import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit {
  @Input()users:string[];
 
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
  }

  ChangeToActive(id:number){
    debugger;
    this.userservice.setToActive(id)
  }
}
