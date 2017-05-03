import { Component, OnInit  } from '@angular/core';

import { topSaleMonthAreaData } from './top-sale-month-areaServer';


@Component({
  moduleId: module.id,
  selector: 'top-sale-month-area',
  templateUrl: 'top-sale-month-area.html',
  styleUrls: ['../../default.css','./top-sale-month-area.css','../../elegant-font.css','../../responsive.css']
})

export class TopSaleMonthArea implements OnInit { 
  modalCtrl:boolean = false;
  modalData:any;
	topSaleMonthAreaDatas: any[];
	errorMessage: string;

	 constructor(
    private topSaleMonthAreaData: topSaleMonthAreaData) { };

	  getDatas(): void {
    this.topSaleMonthAreaData
        .gettopSaleMonthAreaDatas()
       .then(
                       topSaleMonthAreaDatas => this.topSaleMonthAreaDatas = topSaleMonthAreaDatas,
                       error =>  this.errorMessage = <any>error);
        
  }
  ngOnInit(): void {
    this.getDatas();
  }


  showModal(productItem:any):void{
    this.modalCtrl = true;
    this.modalData = productItem;
  }

   colseFatherModal() {

       this.modalData = false;
    }

}
