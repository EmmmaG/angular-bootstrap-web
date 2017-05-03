import { Component, OnInit, Input } from '@angular/core';
import {  Router }  from '@angular/router';

 import {shopServer } from '../shop/shop.Server';



@Component({
  moduleId: module.id,
  templateUrl: '../shopSidebar/shopgrid/shopgrid.component.html',
  styleUrls:['../shopSidebar/shopgrid/shopgrid.component.css','../default.css','../elegant-font.css','../responsive.css']
})

export class portfolioComponent implements OnInit { 
  portfolio:boolean = true;
  modalCtrl:boolean = false;
  modalData:any;
	productDatas: any[];
  errorMessage: string;
  productData: any;


	constructor(
    private router: Router,
    private shopServer: shopServer) { }

     getDatas(): void {
    this.shopServer
        .getShopDatas()
       .then(
                       productDatas => this.productDatas = productDatas.slice(0,6),
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

    goProcduct(productItem:any) {
      this.productData = productItem;
      document.documentElement.scrollTop = document.body.scrollTop =0;
      this.router.navigate(['/singleProduct', productItem.id]);
    }




}