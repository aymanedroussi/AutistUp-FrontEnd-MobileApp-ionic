import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-page-conf',
  templateUrl: './payment-page-conf.page.html',
  styleUrls: ['./payment-page-conf.page.scss'],
})
export class PaymentPageConfPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  redirect(){
    this.router.navigateByUrl("/home-page");
  }
}
