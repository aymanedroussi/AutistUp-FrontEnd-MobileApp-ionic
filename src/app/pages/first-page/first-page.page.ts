import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.page.html',
  styleUrls: ['./first-page.page.scss'],
})
export class FirstPagePage implements OnInit {
  
  constructor(private router:Router) { }

  ngOnInit() {
  }
  navigateToLogin(){
    this.router.navigateByUrl("/login");
  }

  navigateToRegister(){
    this.router.navigateByUrl("/register");
  }

}
