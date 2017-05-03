import { Component, OnInit,Input } from '@angular/core';
import { Router }  from '@angular/router';
import { shopServer } from '../../shop/shop.Server';

@Component({
   moduleId: module.id,
   templateUrl: 'shoplist.component.html',
   styleUrls:['./shoplist.component.css','../../default.css','../../elegant-font.css','../../responsive.css']
})

export class shoplistComponent implements OnInit { 

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
  goProcduct(productItem:any) {
        this.productData = productItem;
        this.router.navigate(['/singleProduct', productItem.id]);
        document.documentElement.scrollTop = document.body.scrollTop =0;
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