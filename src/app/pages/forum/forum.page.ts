import { Forum } from './../../models/forum';
import { ForumService } from './../../services/forum.service';
import { CentreService } from './../../services/centre.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
})
export class ForumPage implements OnInit {
  forums:Forum[]=[];
  forum:Forum={};
  constructor(private router:Router,private forumService:ForumService,private alertController: AlertController) { }
  searchLabel:String;
  ngOnInit() {
    this.getAllForums();
  }
  back(){
    this.router.navigateByUrl("home-page")
  }

  getAllForums() {
    return this.forumService.getAllForums().subscribe((forum:Forum[])=>{
   
   
    this.forums=forum});
    
  }

  ajouterForum(){
this.presentPrompt();
  }

  getquestions(id:any){
    this.forumService.setForumSelected(id);
    this.router.navigateByUrl("forum/question");

  }
  async presentPrompt() {
    
    let alert = this.alertController.create({
      header:"Entrez la question ",
      
      inputs: [
        {
        
          name: 'question',
          type: 'text',
          
        }
       
      ],
      
      buttons: [
        {
          text: 'suivant',
          role: 'Envoyer',
          handler: data => {
            this.forum.sujet=data.question;
            this.forumService.addForum(this.forum).subscribe(result=>this.ngOnInit());
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
}
