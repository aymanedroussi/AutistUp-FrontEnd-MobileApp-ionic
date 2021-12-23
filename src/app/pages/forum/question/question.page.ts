import { AuthService } from 'src/app/services/auth.service';
import { Question } from './../../../models/question';
import { Component, OnInit } from '@angular/core';
import { ForumService } from 'src/app/services/forum.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {

  questionAdd:Question={};
  question:Question[]=[];
  constructor(private forumService:ForumService,private router:Router,private alertController: AlertController,private authService:AuthService) { }

  ngOnInit() {
    
    if(this.getForumSelected()==null){
      this.router.navigateByUrl("/home-page");

    }
    else{
      this.getquestions();
    }
    
  }

  getForumSelected(){
    return this.forumService.getForumSelected();
  }

  getquestions(){
    this.forumService.getAllQuestions(this.getForumSelected()).subscribe((questions:Question[])=>{
      this.question=questions;
     
    }
    );
  }

  back(){
    this.router.navigateByUrl("/forum");
  }
  ajouterReponse(){
    this.presentPrompt();
  }
  async presentPrompt() {
    
    let alert = this.alertController.create({
      header:"Entrez la réponse ",
      
      inputs: [
        {
        
          name: 'reponse',
          type: 'text',
          
        }
       
      ],
      
      buttons: [
        {
          text: 'suivant',
          role: 'Envoyer',
          handler: data => {
            this.questionAdd.libelle=data.reponse;
            this.questionAdd.forumId=this.getForumSelected();
            this.questionAdd.role="Parent";
            this.authService.getUser().subscribe(parent=>{
              console.log(parent);
              this.questionAdd.auteur=parent.nom;
              
              });
            
            this.forumService.addQuestion(this.questionAdd).subscribe(result=>this.back());
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
