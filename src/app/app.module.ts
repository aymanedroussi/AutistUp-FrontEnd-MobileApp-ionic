
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor } from './services/jwt.interceptor';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Screenshot } from '@ionic-native/screenshot';

@NgModule({
  declarations: [AppComponent ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,Ng2SearchPipeModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },  {
    provide:HTTP_INTERCEPTORS,
    useClass:JwtInterceptor,
    multi:true
  }],

  bootstrap: [AppComponent],
})
export class AppModule {}
