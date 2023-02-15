import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentGuard implements CanActivate {
  canActivate(){
    const isAdmin:boolean=true;
    if(isAdmin){
      return true;
    }
    else{
      return false
    }
  }
   
  
}
