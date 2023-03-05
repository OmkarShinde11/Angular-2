import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {
 @Input()users:string[];
 
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
  }
  ChangeToInactive(id:number){
    this.userservice.setToInactive(id)
  }

}
