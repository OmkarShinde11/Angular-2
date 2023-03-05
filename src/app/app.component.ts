import { Component, OnInit } from '@angular/core';
import { UserService } from './Service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  oddNumber=[];
  evenNumber=[];
  count:number=0
  title = 'practice';
  // serverName='';
  // serverContent=''
  server=[{
    type:'blueprint',name:'Test Server',content:'Testing Server'
  }];
  activeUser:string[];
  inactiveUser:string[];

  constructor(private userservice:UserService){}
  ngOnInit(){
      console.log(this.server);
      this.activeUser=this.userservice.userActive;
      this.inactiveUser=this.userservice.userInactive;
      
  }
  addServer(serverdata:{name:string,content:string}){
    this.server.push({
      type:'server',
      name:serverdata.name,
      content:serverdata.content,
    })
  }

  addBluePrint(serverdata:{name:string,content:string}){
    this.server.push({
      type:'blueprint',
      name:serverdata.name,
      content:serverdata.content,
    })
  }

  firstChange(){
    this.server[0].name='Omkar Server'
  }
  destroy(){
    this.server.splice(0,1)
  }
  gameStart(data){
    debugger;
    if(data%2==0){
      this.evenNumber.push(data)
    }
    else{
      this.oddNumber.push(data)
    }
    
  }
  

  
}
  

