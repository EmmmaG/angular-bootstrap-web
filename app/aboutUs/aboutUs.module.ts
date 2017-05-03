import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ShareModule } from '../shared/shared.module';

import { aboutUsComponent } from './aboutUs.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        ShareModule
    ],
    declarations: [
        aboutUsComponent
    ],
    providers: []
})
export class aboutUsModule {}