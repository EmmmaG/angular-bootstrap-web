import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { ShareModule }        from '../shared/shared.module';

import { singleProductComponent }     from './single-product.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ShareModule
  ],
  declarations: [
  	singleProductComponent
  ],
  providers: [  ]
})
export class singleProductModule {}