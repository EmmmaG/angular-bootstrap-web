import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


import { shopServer } from '../shop/shop.Server';

export class Hero {
  id: number;
}

@Component({
  moduleId: module.id,
  templateUrl: 'single-product.component.html',
  styleUrls:['./single-product.component.css','../default.css','../elegant-font.css','../responsive.css']
})

export class singleProductComponent implements OnInit { 
  //productData:any;
   errorMessage: string;
   buyNumber:number = 1;
   showNames: any = [
      {
        id:1,
        name: 'description',
        active: true,
      },{
        id:2,
        name: 'reviews',
        active: false,
      },{
        id:3,
        name: 'tags',
        active: false,
      },{
        id:4,
        name: 'cutomer',
        active: false,
      }

    ]

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private shopServer: shopServer
  ) {}

  @Input()
  productData:any = Hero;

 ngOnInit() {
    
this.route.params
    .switchMap((params: Params) => this.shopServer.getProductData(+params['id']))
    .subscribe(productData => this.productData = productData);
  }

  changeNumber(showName:any):void{

         this.showNames.forEach(function(item:any,index:number){
          if(index+1 == showName.id){
            item.active = true;
          }else{
            item.active = false;
          }
        })
  }

  goHome() {
      this.router.navigate(['/home']);
    }

    goShop(){
       this.router.navigate(['/shop']);
    }

    buyNumberCtrl(num:number){
      if(num){
        this.buyNumber++;
      }else{
        if(this.buyNumber<2){
          this.buyNumber = 1;
        }else{
           this.buyNumber--;
        }
      }
    }
	
}
