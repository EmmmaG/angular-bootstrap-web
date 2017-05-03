import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AlertModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { contactComponent } from './contact/contact.component';
import { loginComponent } from './login/login.component';
import { portfolioComponent } from './portfolio/portfolio.component';
import { accountComponent } from './account/account.component';
import { checkoutComponent } from './checkout/checkout.component';

import { AppComponentServer } from './app.componentServer'

import { AppRoutingModule } from "./app-routing.module";

import { HomeModule }     from './home/home.module';
import { aboutUsModule }     from './aboutUs/aboutUs.module';  
import { shopModule }     from './shop/shop.module';  
import { CrisisCenterModule }     from './shopSidebar/shopSidebar.module';  
import { singleProductModule }     from './single-product/single-product.module';  
import { blogModule }     from './blog/blog.module'; 
import { cartModule }     from './cart/cart.module'; 
import { ShareModule }        from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    contactComponent,
    loginComponent,
    portfolioComponent,
    accountComponent,
    checkoutComponent

  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ShareModule,
    HomeModule,
    aboutUsModule,
    shopModule,
    CrisisCenterModule,
    singleProductModule,
    blogModule,
    cartModule
  ],
  providers: [AppComponentServer],
  bootstrap: [AppComponent]
})
export class AppModule { }
