import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { shopComponent } from './shop.component';  

import { shopServer } from './shop.Server';
import { ShareModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ShareModule
  ],
  declarations: [
    shopComponent
  ],
  providers: [ shopServer ]
})
export class shopModule {}