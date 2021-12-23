import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rdv-contact',
  templateUrl: './rdv-contact.page.html',
  styleUrls: ['./rdv-contact.page.scss'],
})
export class RdvContactPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigateByUrl("home-page")
  }

  navigateToRdv(){
    this.router.navigateByUrl("rdv-contact/rdv");
  }
  navigateToCentre(){
    this.router.navigateByUrl("rdv-contact/centres");
  }
}
