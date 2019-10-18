import { MemberService } from '../Services/member.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { HttpModule } from '@angular/http';  
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { appRoutingModule  } from './app-routing.module'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    HttpClientModule
  ],
  providers: [MemberService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
