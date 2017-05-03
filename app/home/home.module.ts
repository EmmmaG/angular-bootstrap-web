import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { HomeComponent }    from './home.component';
import { CategoryBanner }    from './category-banner/category-banner';
import { DealMonthArea }    from './deal-month-area/deal-month-area';
import { TopSaleMonthArea }    from './top-sale-month-area/top-sale-month-area';
import { AddsArea }    from './adds-area/adds-area';
import { ProductTabArea }    from './product-tab-area/product-tab-area';
import { NewsletterArea }    from './newsletter-area/newsletter-area';
import { InstragamArea }    from './instragam-area/instragam-area';
import { BlogArea }    from './blog-area/blog-area';



import { CategoryBannerServer }    from './category-banner/category-bannerServer';
import { topSaleMonthAreaData }    from './top-sale-month-area/top-sale-month-areaServer';
import { productTabAreaServer } from './product-tab-area/product-tab-areaServer';


import { HomeRoutingModule } from './home-routing.module';
import { TabsModule } from 'ng2-bootstrap';

import { ShareModule }        from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    HttpModule,
    TabsModule.forRoot(),
    ShareModule
  ],
  declarations: [
    HomeComponent,
    CategoryBanner,
    DealMonthArea,
    TopSaleMonthArea,
    AddsArea,
    ProductTabArea,
    NewsletterArea,
    InstragamArea,
    BlogArea,
 
  ],
  providers: [ CategoryBannerServer,topSaleMonthAreaData,productTabAreaServer ]
})
export class HomeModule {}