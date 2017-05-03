 import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { FormsModule } from '@angular/forms';

 import { ServiceArea } from './service-area/service-area';
 import { modalComponent } from './modal/modal.component';
 import { OnsleproArea } from './onslepro-area/onslepro-area';

 import { onsleproAreaServer } from './onslepro-area/onslepro-areaServer';

 @NgModule({
     imports: [ CommonModule, FormsModule ],
     declarations: [ ServiceArea, modalComponent, OnsleproArea ],
     exports: [ CommonModule, FormsModule, ServiceArea, modalComponent, OnsleproArea ],
     providers: [ onsleproAreaServer ]
 })

 export class ShareModule {}