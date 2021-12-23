import { MenuComponent } from './../../components/menu/menu.component';
import { TokenService } from './../../services/token.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {

  constructor(private http :HttpClient,private tokenService:TokenService,private menuComponent: MenuComponent,private router:Router) { }

  ngOnInit() {
    
  }

 /* test(){
    this.testService().subscribe(response=>console.log(this.tokenService.getInfos()["sub"]));
  }

  testService(){
    return this.http.get(`${environment.apiBack_url}/parent/test`,);
  } */

  openFirst(){
    this.menuComponent.openFirst();
    console.log("hh")
  }

  communaute(){
    this.router.navigateByUrl("/forum");
  }
  formation(){
    this.router.navigateByUrl("/article-video");
  }
  rdvcontact(){
    this.router.navigateByUrl("/rdv-contact");
  }
  evolutionSuivi(){
    this.router.navigateByUrl("/evolution-suivi");
  }
}
