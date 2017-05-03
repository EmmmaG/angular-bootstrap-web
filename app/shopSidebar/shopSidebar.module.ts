import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { shopSidebarComponent }  from './shopSidebar.component';
import { shopgridComponent }  from './shopgrid/shopgrid.component';
import { shoplistComponent }  from './shoplist/shoplist.component';

import { shopSidebarRoutingModule } from './shopSidebar-routing.module';

import { shopServer } from '../shop/shop.Server';
import { ShareModule }        from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    shopSidebarRoutingModule,
    ShareModule
  ],
  declarations: [
    shopSidebarComponent,
    shopgridComponent,
    shoplistComponent
    
  ],
  providers: [ shopServer ]
})
export class CrisisCenterModule {}