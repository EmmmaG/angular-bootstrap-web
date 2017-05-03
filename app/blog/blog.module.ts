import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ShareModule } from '../shared/shared.module';

import { blogComponent } from './blog.component';
import { blogListComponent } from './blogList/blogList.component';
import { blogDetailsComponent } from './blogDetails/blogDetails.component';

import { blogRoutingModule } from './blog-routing.module';

import { blogServer } from './blog.Server';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        HttpModule,
        ShareModule,
        blogRoutingModule
    ],
    declarations:[
        blogComponent,
        blogListComponent,
        blogDetailsComponent
    ],
    providers: [ blogServer ]
})

export class blogModule {}
