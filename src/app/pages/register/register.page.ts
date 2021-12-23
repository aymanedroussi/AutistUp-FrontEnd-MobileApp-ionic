import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
 
  registerForm:FormGroup;
  constructor(private router:Router,private authService:AuthService,public loadingController: LoadingController,private alertController: AlertController) { }

  ngOnInit() {
    this.init_register_form();
  }
  

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 4000
    });
    await loading.present();
    
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    return await loading;
  }


  async parentExistsAlert(message:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Oups!',
      message: message,
      buttons: ["D'accord"]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    
  }

  



  
  init_register_form(){
    this.registerForm=new FormGroup({
      nom: new FormControl(null,[Validators.required]),
      age: new FormControl(null,[Validators.required,Validators.maxLength(3)]),
      email:new FormControl(null,[Validators.email,Validators.required]),
      password: new FormControl(null,[Validators.required]),
      confirmPassword:new FormControl(null,Validators.required),
      mobile:new FormControl(null,[Validators.required])
    })}


    continue(){
      this.presentLoading();
this.authService.register(this.registerForm.value).subscribe(parent=>{
  
  this.router.navigateByUrl("/login");
  
  
}
,
error => {
  if (error.error.message=="Error,parent already exists") {
    
    this.parentExistsAlert('Un compte avec cette adresse mail existe déjà.');
  }
  else{
    
    this.parentExistsAlert('Veuillez réssayer plus-tard!');
  }
 
 
  
  
},
() => {
  // 'onCompleted' callback.
  // No errors, route to new page here
  console.log("hello world")
  
});
    }
  
}
