import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { blogComponent } from './blog.component';
import { blogListComponent } from './blogList/blogList.component';
import { blogDetailsComponent } from './blogDetails/blogDetails.component';

const blogRoutes: Routes = [
    {
        path: 'blog',
        component: blogComponent,
        children: [
           {
               path: 'bloglist',
               component: blogListComponent
           },
           {
               path: 'blogDetails/:id',
               component: blogDetailsComponent
           },
    ]
},
];

@NgModule({
    imports:[
        RouterModule.forChild(blogRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class blogRoutingModule {}