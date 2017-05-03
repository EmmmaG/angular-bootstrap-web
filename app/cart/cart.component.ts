import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cartServer } from './cart.service';

@Component({
    moduleId: module.id,
    templateUrl: 'cart.component.html',
    styleUrls: ['../default.css','../elegant-font.css','../responsive.css','./cart.component.css'],
    providers: [cartServer]
})

export class cartComponent implements OnInit{
    productData: any;
    cartDatas: any[];
    errorMessage: string;
    amount: number = 0;

    constructor(
        private router: Router,
        private cartServer: cartServer
    ){}

    getDatas(){
        this.cartServer.getCartDatas().then(
            cartDatas => (this.cartDatas = cartDatas, this.allAmount()),
            error => this.errorMessage = <any>error
        );
    }

    ngOnInit():void{
        this.getDatas();
    }

    changeValue(value: number, cartItem: any){
        if(cartItem.number<1) {
            value=0;
            cartItem.number = 0;
            console.log(cartItem.number)
        }
        else {
            cartItem.number = value;
            console.log(cartItem.number)
        }
        this.allAmount()
    }

    allAmount() {
        this.amount = 0;
        this.cartDatas.forEach((item:any,index:number)=>{
          this.amount =  this.amount+ parseInt(item.newPrice)*parseInt(item.number);
        })
    }
    goShop(){
       this.router.navigate(['/shop']);
    }

    goProcduct(cartItem:any) {
       this.productData = cartItem;
       this.router.navigate(['/singleProduct', cartItem.id]);
    }

    deleteItem(cartItem:any) { 	
    	let index = this.cartDatas.indexOf(cartItem);
        this.cartDatas.splice(index,1);
		this.allAmount()
    }
}