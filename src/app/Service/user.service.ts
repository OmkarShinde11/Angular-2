import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userActive:string[]=['omkar','raj'];
userInactive:string[]=['Shivam','sahil']
  constructor(private counterservice:CounterService) { }

  setToActive(id:number){
   this.userActive.push(this.userInactive[id]);
   this.userInactive.splice(id,1);
  //  console.log("the active count "+this.counterservice.incrementCount())
  let activeCount=this.counterservice.incrementCountForActive();
  console.log("The Active Count is "+activeCount)
  }
  setToInactive(id:number){
    this.userInactive.push(this.userActive[id]);
    this.userActive.splice(id,1);
    let inactiveCount=this.counterservice.incrementCountForInactive()
    console.log("The Inactive Count is "+inactiveCount)
    // console.log("The inactive count "+this.counterservice.incrementCount())
  }
}
