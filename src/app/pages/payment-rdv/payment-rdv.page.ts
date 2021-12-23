import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-rdv',
  templateUrl: './payment-rdv.page.html',
  styleUrls: ['./payment-rdv.page.scss'],
})
export class PaymentRdvPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  payer(){
    this.router.navigateByUrl("/payment-rdv-conf");
  }
}
