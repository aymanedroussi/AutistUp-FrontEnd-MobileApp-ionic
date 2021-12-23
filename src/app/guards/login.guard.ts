import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private tokenService :TokenService,private router:Router){

  }
  canActivate(route: ActivatedRouteSnapshot):boolean{
  
 

    if(this.tokenService.loggedIn()){
      console.log("ok");
      this.router.navigate(["/home-page"]);
    return false;
  }
  return true;
  
  }
  
}
