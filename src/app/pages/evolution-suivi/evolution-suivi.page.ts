import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evolution-suivi',
  templateUrl: './evolution-suivi.page.html',
  styleUrls: ['./evolution-suivi.page.scss'],
})
export class EvolutionSuiviPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigateByUrl("home-page");
  }
  mchat(){
    this.router.navigateByUrl("evolution-suivi/suivi");
  }
  evolution(){
    this.router.navigateByUrl("evolution-suivi/evolution");
  }
}
