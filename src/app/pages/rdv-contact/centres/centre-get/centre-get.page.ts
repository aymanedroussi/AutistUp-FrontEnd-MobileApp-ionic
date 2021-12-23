import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Centre } from 'src/app/models/centre';
import { CentreService } from 'src/app/services/centre.service';

@Component({
  selector: 'app-centre-get',
  templateUrl: './centre-get.page.html',
  styleUrls: ['./centre-get.page.scss'],
})
export class CentreGetPage implements OnInit {
  filterTerm:String;
  centres:Centre[]=[];
  constructor(private centreService:CentreService,private router:Router) { }

  ngOnInit() {
    if(this.centreService.getCentreId()==null){
      this.router.navigateByUrl("/home-page");

    }
    else{
      this.getAllCentres();
    }
    
  }

  getAllCentres(){
    this.centreService.getAllCentres(this.centreService.centreId).subscribe((centreResults:Centre[])=>this.centres=centreResults
    );
  }
  back(){
    this.router.navigateByUrl("/rdv-contact/centres");
  }

}
