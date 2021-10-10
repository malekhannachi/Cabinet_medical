import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';

import { FooterComponent } from './components/public/shared/footer/footer.component';
import { Page404Component } from './components/public/page404/page404.component';
import { HeaderComponent } from './components/public/shared/header/header.component';
import { TopbarComponent } from './components/private/shared/topbar/topbar.component';
import { SidebarComponent } from './components/private/shared/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  
    FooterComponent,
       Page404Component,
       HeaderComponent,
       TopbarComponent,
       SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule ,
      ReactiveFormsModule,
      HttpClientModule, ToastNoAnimationModule.forRoot(),
    
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
