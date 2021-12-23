import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'menu-example',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private menu: MenuController,private router:Router,private authService:AuthService) { }

  ngOnInit() {}

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  communaute(){
    this.router.navigateByUrl("/forum");
  }
  formation(){
    this.router.navigateByUrl("/formation");
  }
  rdvcontact(){
    this.router.navigateByUrl("/rdv-contact");
  }
  evolutionSuivi(){
    this.router.navigateByUrl("/evolution-suivi");
  }
  logout(){
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }
  paymentPage(){
    this.router.navigateByUrl("/payment-page");
  }

}
