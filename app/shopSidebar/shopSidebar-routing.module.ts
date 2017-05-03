import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { shopSidebarComponent }  from './shopSidebar.component';
import { shopgridComponent }  from './shopgrid/shopgrid.component';
import { shoplistComponent }  from './shoplist/shoplist.component';

const shopSidebarRoutes: Routes = [
  { path: 'shopSidebar',
    component: shopSidebarComponent,
    children: [
      {
        path: 'shopgrid',
        component: shopgridComponent
      },
      {
        path: 'shoplist',
        component: shoplistComponent
      }
    ]
   },

];
@NgModule({
  imports: [
    RouterModule.forChild(shopSidebarRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class shopSidebarRoutingModule { }