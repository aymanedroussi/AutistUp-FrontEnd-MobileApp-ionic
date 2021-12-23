import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'first-page',
    pathMatch: 'full'
  },
 
  {
    path: 'login',canActivate:[LoginGuard],
    
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',canActivate:[LoginGuard],
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'first-page',canActivate:[LoginGuard],
    loadChildren: () => import('./pages/first-page/first-page.module').then( m => m.FirstPagePageModule)
  },
  {
    path: 'home-page',canActivate:[AuthGuard],
    loadChildren: () => import('./pages/home-page/home-page.module').then( m => m.HomePagePageModule)
  },
 
  {
    path: 'forum',canActivate:[AuthGuard],
    loadChildren: () => import('./pages/forum/forum.module').then( m => m.ForumPageModule)
  },
  {
    path: 'forum/question',canActivate:[AuthGuard],
    loadChildren: () => import('./pages/forum/question/question.module').then( m => m.QuestionPageModule)
  },
 
  {
    path: 'payment-page',canActivate:[AuthGuard],
    loadChildren: () => import('./pages/payment-page/payment-page.module').then( m => m.PaymentPagePageModule)
  },
 
  
  {
    path: 'rdv-contact',canActivate:[AuthGuard],
    loadChildren: () => import('./pages/rdv-contact/rdv-contact.module').then( m => m.RdvContactPageModule)
  },
  {
    path: 'rdv-contact/rdv',canActivate:[AuthGuard],
    loadChildren: () => import('./pages/rdv-contact/rdv/rdv.module').then( m => m.RdvPageModule)
  },
  {
    path: 'rdv-contact/centres',canActivate:[AuthGuard],
    loadChildren: () => import('./pages/rdv-contact/centres/centres.module').then( m => m.CentresPageModule)
  },
  {
    path: 'rdv-contact/centres/getCentre',canActivate:[AuthGuard],
    loadChildren: () => import('./pages/rdv-contact/centres/centre-get/centre-get.module').then( m => m.CentreGetPageModule)
  },
  {
    path: 'evolution-suivi',canActivate:[AuthGuard],
    loadChildren: () => import('./pages/evolution-suivi/evolution-suivi.module').then( m => m.EvolutionSuiviPageModule)
  },
  {
    path: 'evolution-suivi/suivi',canActivate:[AuthGuard],
    loadChildren: () => import('./pages/evolution-suivi/suivi/suivi.module').then( m => m.SuiviPageModule)
  },
  {
    path: 'evolution-suivi/evolution',canActivate:[AuthGuard],
    loadChildren: () => import('./pages/evolution-suivi/evolution/evolution.module').then( m => m.EvolutionPageModule)
  },
  {
    path: 'formation/video',canActivate:[AuthGuard],
    loadChildren: () => import('./pages/formation/video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'formation/article',canActivate:[AuthGuard],
    loadChildren: () => import('./pages/formation/article/article.module').then( m => m.ArticlePageModule)
  },
  {
    path: 'article-video',canActivate:[AuthGuard],
    loadChildren: () => import('./pages/formation/article-video/article-video.module').then( m => m.ArticleVideoPageModule)
  },
  {
    path: 'payment-rdv',canActivate:[AuthGuard],
    loadChildren: () => import('./pages/payment-rdv/payment-rdv.module').then( m => m.PaymentRdvPageModule)
  },
  {
    path: 'payment-rdv-conf',
    loadChildren: () => import('./pages/payment-rdv-conf/payment-rdv-conf.module').then( m => m.PaymentRdvConfPageModule)
  },
  {
    path: 'payment-page-conf',
    loadChildren: () => import('./pages/payment-page-conf/payment-page-conf.module').then( m => m.PaymentPageConfPageModule)
  },
  {
    path:'**',
    redirectTo: 'first-page',
    pathMatch: 'full'

  },



  
 
 
 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
