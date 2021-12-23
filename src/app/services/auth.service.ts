import { TokenService } from './token.service';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Parent } from '../models/parent';
import { ParentLogin } from '../models/parent-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  environment;
  constructor(private http :HttpClient,private tokenService:TokenService) { }
  email:String;
  register(data:Parent){
    data.role="ROLE_PARENT";
    return this.http.post(`${environment.apiBack_url}/parent/create`,data);
  }

  login(data:ParentLogin){
    data.role="ROLE_PARENT";
    return this.http.post(`${environment.apiBack_url}/login`,data);
  }

  logout(){
    this.tokenService.deleteToken();
    
      }

  getUser(){
  
    return this.http.get<Parent>(`${environment.apiBack_url}/parent/get/`+this.tokenService.getInfos().sub);
  }
}
