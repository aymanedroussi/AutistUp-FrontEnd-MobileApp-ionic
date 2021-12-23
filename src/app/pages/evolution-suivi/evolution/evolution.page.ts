import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evolution',
  templateUrl: './evolution.page.html',
  styleUrls: ['./evolution.page.scss'],
})
export class EvolutionPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigateByUrl("/evolution-suivi");

  }

}
