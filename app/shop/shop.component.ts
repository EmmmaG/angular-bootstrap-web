import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { shopServer } from './shop.Server';

@Component({
    moduleId: module.id,
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css','../default.css','../elegant-font.css','../responsive.css']
})

export class shopComponent implements OnInit {
    modalCtrl: boolean = false;
    modalData: any;
    productDatas: any[];
    errorMessage: string;
    tabShowCtrl: boolean = true;
    tabsActive: {};
    tabActive: boolean = true;
    currentClasses: {};
    currentClasses1: {};
    productData: any;
    showNumbers: any = [
        {
            number: '6',
            active: true,
        },{
            number: '9',
            active: false,
        },{
            number: '12',
            active: false,
        }
    ];

    paginationLength:Array<any> = [];
    showNumber: number = 6;

    constructor(
        private shopServer: shopServer,
        private router: Router
    ){}

    pagination(){
        this.paginationLength = [];
        let productDataLength = this.productDatas.length;
        let index = 0;
        for (let i: number=0; i<productDataLength; i++){
           if(i%this.showNumber==0){
           index++;
           if(index == 1){
              let comment = {"id":index,"active":true};
              this.paginationLength.push(comment);
           }else{
              let comment = {"id":index,"active":false};
              this.paginationLength.push(comment);
           }
           }
        }
        this.productDatas = this.productDatas.slice(0,this.showNumber)
    }

    getDatas():void {
        this.shopServer.getShopDatas().then(
            productDatas => (this.productDatas = productDatas, this.pagination()),
            error => this.errorMessage = <any>error
        );
    }

    setCurrentClasses(){
        this.currentClasses = {
            active: this.tabActive,
            in: this.tabActive,
        };
        this.currentClasses1 = {
            active: !this.tabActive,
            in: !this.tabActive,
        };
    }

    ngOnInit():void {
        this.getDatas();
        this.setCurrentClasses();
    }

    changeTab(a:number):void{
        this.tabShowCtrl = !this.tabShowCtrl;
        this.tabActive = !this.tabActive;
        this.setCurrentClasses();
    }

    changeNumber(showNumber:any):void{
     this.showNumber = showNumber.number;
		this.shopServer
            .getShopDatas()
            .then(
                       productDatas => (this.productDatas = productDatas,this.pagination()),
                       error =>  this.errorMessage = <any>error);  

       	this.showNumbers.forEach((item:any,index:number)=>{
    			if(item.number == showNumber.number){
    				item.active = true;
    			}else{
    				item.active = false;
    			}
    		})}
        
    goProcduct(productItem:any) {
       this.productData = productItem;
       this.router.navigate(['/singleProduct', productItem.id]);
    }

    showModal(productItem:any):void{
		this.modalCtrl = true;
		this.modalData = productItem;
	}

	 colseFatherModal() {
   		this.modalData = false;
 	}

     changePagination(pagination:any) {
      let footer =   pagination.id * this.showNumber;
      let header =   footer - this.showNumber;
      this.shopServer
        .getShopDatas()
       .then(
                        productDatas => (this.productDatas = productDatas, this.productDatas = this.productDatas.slice(header,footer)),
                       error =>  this.errorMessage = <any>error); 
      this.paginationLength.forEach((item:any,index:number)=>{
        if(pagination.id==item.id){
          item.active = true;
        }else{
          item.active = false;
        }
      })
      
    }
}