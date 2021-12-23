import { TokenService } from './../../services/token.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm:FormGroup;
  constructor(private router:Router,private authService:AuthService,private tokenService:TokenService) { }

  ngOnInit() {
    this.init_login_form();
  }

  init_login_form(){
    this.loginForm=new FormGroup({
      email:new FormControl(null,[Validators.email,Validators.required]),
      password: new FormControl(null,[Validators.required])
    })}

    continue(){
      this.authService.login(this.loginForm.value).subscribe((token:any)=>{
        if(token.role=="ROLE_PARENT"){
          this.router.navigateByUrl("/home-page");
          this.tokenService.setToken(token);
          
        }
        else{
          this.tokenService.deleteToken();
          this.router.navigateByUrl("/home");
        }
        
    })};


}
