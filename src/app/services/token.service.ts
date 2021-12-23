import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }


  setToken(data:any){
    localStorage.setItem('token',data.token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  decode(payload : any){
    return JSON.parse(atob(payload));
  }
  
  payload(token :any){
    const payload=token.split('.')[1];
    return this.decode(payload);
  }
  deleteToken(){
    localStorage.removeItem('token');
  }
  
getInfos(){

  const token = this.getToken();

  if (token){
    const payload= this.payload(token);
    return payload ? payload : null;

  }
  return null;
}

JwtIsValid(){
  const token = this.getToken();
 

  if(token){
    return true;// !Warning
    }
  
  return false;

}

loggedIn(){
  return this.JwtIsValid();
}


}
