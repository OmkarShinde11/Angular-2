import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
serverid:number=1;
serverStatus:string='Active';
allowbutton:boolean=true;
ServerMeassage:string='No server is Created '
  constructor() {
    setTimeout(() => {
      return this.allowbutton=false
    }, 2000);
  }

  ngOnInit(): void {
  }
  serverChange(){
    return this.ServerMeassage='Server is Created'
  }
}


