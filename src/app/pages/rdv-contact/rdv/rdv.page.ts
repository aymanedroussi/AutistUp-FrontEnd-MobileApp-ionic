import { TokenService } from './../../../services/token.service';
import { RdvAdd } from './../../../models/rdvAdd';
import { RdvService } from './../../../services/rdv.service';
import { SpecialisteRdv } from './../../../models/specialisteRdv';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController }  from '@ionic/angular';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.page.html',
  styleUrls: ['./rdv.page.scss'],
})
export class RdvPage implements OnInit {
  rdv:RdvAdd={};
  searchLabel :string;
  specialisteRdv: SpecialisteRdv[]=[];
  constructor(private router:Router,private rdvService:RdvService,private alertController: AlertController,private tokenService:TokenService) { }

  ngOnInit() {
    this.getAllSpecialistesRdv();
  }

  back(){
    this.router.navigateByUrl("/rdv-contact");
  }

  getAllSpecialistesRdv() {
    return this.rdvService.getAllSpecialistesRdv().subscribe((specialisterdv:SpecialisteRdv[])=> this.specialisteRdv=specialisterdv);
  }
  async presentPrompt(email:String) {
    
    let alert = this.alertController.create({
      header:"Entrez la date ",
      
      inputs: [
        {
        
          name: 'date',
          type: 'date',
          min: '2021-12-13'
        }
       
      ],
      
      buttons: [
        {
          text: 'suivant',
          role: 'Envoyer',
          handler: data => {
            this.next(email,data.date);
          }},
          {
            text: 'Cancel',
            role: 'cancel',
            handler: data => {
              console.log('Cancel clicked');
            },
        }
       
        
        
      ]
    });
    (await alert).present();
  }
  async next(email:String,date:String) {
    
    let alert = this.alertController.create({
      header:"Entrez la date ",
      
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: '8:00',
          value: '8:00',
          handler: () => {
           
          },
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: '12:00',
          value: '12:00',
          handler: () => {
           
          }
        },
        {
          name: 'radio3',
          type: 'radio',
          label: '15:00',
          value: '15:00',
          handler: () => {
            
          }
        },
       
        
        
      ],
       
      buttons: [
        {
          text: 'Envoyer',
          role: 'Envoyer',
          handler: data => {
            this.rdv.heure=data;
            this.rdv.jour=date;
            this.rdv.parentEmail=this.tokenService.getInfos().sub;
            this.rdv.specialisteRdvEmail=email;
            this.addRdv(this.rdv);
          }},
          {
            text: 'Cancel',
            role: 'cancel',
            handler: data => {
            
            },
        }
       
        
        
      ]
    });
    (await alert).present();
  }
  addRdv(rdv:RdvAdd){
    this.rdvService.addRdv(rdv).subscribe(result=>console.log(result));
    this.router.navigateByUrl("/payment-rdv");
  }

}
