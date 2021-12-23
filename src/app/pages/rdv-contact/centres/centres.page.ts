import { CentreService } from './../../../services/centre.service';
import { Component, OnInit } from '@angular/core';
import { Ville } from 'src/app/models/ville';
import { Router } from '@angular/router';

@Component({
  selector: 'app-centres',
  templateUrl: './centres.page.html',
  styleUrls: ['./centres.page.scss'],
})
export class CentresPage implements OnInit {
  villes:Ville[]=[];
  constructor(private centreService:CentreService,private router:Router) { }

  ngOnInit() {
    this.getAllCentres();
  }
  filterTerm: string;
  getAllCentres() {
    return this.centreService.getAllArticles().subscribe((ville:Ville[])=>{
   
   
    this.villes=ville});
    
  }

 
    back(){
      this.router.navigateByUrl("/rdv-contact");
      this.getAllCentres();
    
  }
  getCentre(id){
    this.centreService.setCentreId(id);
    this.router.navigateByUrl("rdv-contact/centres/getCentre");
  }

  
}
