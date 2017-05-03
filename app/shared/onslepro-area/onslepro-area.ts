import { Component, OnInit } from '@angular/core';

import { onsleproAreaServer } from './onslepro-areaServer';

@Component({
    moduleId: module.id,
    selector: 'onslepro-area',
    templateUrl: './onslepro-area.html',
    styleUrls: ['../../default.css','./onslepro-area.css']
})

export class OnsleproArea implements OnInit {
    onsleproAreaDatas: any[];
    errorMessage: string;

    constructor(
        private onsleproAreaServer: onsleproAreaServer
    ){}

    getDatas(): void {
        this.onsleproAreaServer.getOnsleproAreaDatas().then(
            onsleproAreaDatas => this.onsleproAreaDatas = onsleproAreaDatas,
            error => this.errorMessage = <any>error
        );
    }

    ngOnInit():void {
        this.getDatas();
    }
}