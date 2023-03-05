import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  Inactivenumber=0;
  activeNumber=0;
  constructor() { }
  incrementCountForInactive(){
    // this.number+=1;
    this.Inactivenumber++;
    return this.Inactivenumber
  }
  incrementCountForActive(){
    // this.number+=1;
    this.activeNumber++;
    return this.activeNumber
  }
}
