import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-rdv-conf',
  templateUrl: './payment-rdv-conf.page.html',
  styleUrls: ['./payment-rdv-conf.page.scss'],
})
export class PaymentRdvConfPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  redirect(){
    this.router.navigateByUrl("/home-page");
  }
}
