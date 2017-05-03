import { NgModule }      from '@angular/core';
import { RouterModule,Routes  }   from '@angular/router';

import { aboutUsComponent }     from './aboutUs/aboutUs.component';  
import { shopComponent }     from './shop/shop.component';  
import { singleProductComponent }     from './single-product/single-product.component';
import { cartComponent }     from './cart/cart.component';
import { contactComponent }  from './contact/contact.component';
import { loginComponent }  from './login/login.component';
import { portfolioComponent }  from './portfolio/portfolio.component';
import { accountComponent }  from './account/account.component';
import { checkoutComponent }  from './checkout/checkout.component';

const appRoutes: Routes = [
  
  { path: 'aboutUs', component: aboutUsComponent },
  { path: 'shop', component: shopComponent },
  { path: 'singleProduct/:id', component: singleProductComponent },
  { path: 'cart', component: cartComponent },
  { path: 'contact', component: contactComponent },
  { path: 'login', component: loginComponent },
  { path: 'portfolio', component: portfolioComponent },
  { path: 'account', component: accountComponent },
  { path: 'checkout', component: checkoutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},

];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}