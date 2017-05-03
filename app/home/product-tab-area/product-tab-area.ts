import { Component, OnInit} from '@angular/core';

 import { productTabAreaServer } from './product-tab-areaServer';

@Component({
   moduleId: module.id,
  selector: 'product-tab-area',
  templateUrl: './product-tab-area.html',
  styleUrls: ['./product-tab-area.css','../../default.css']
})
export class ProductTabArea implements OnInit {
   arrival: boolean = true;
   tranding: boolean = false;
   saler: boolean = false;
   productTabAreaDatas: any ;
   errorMessage: string;


     constructor(
    private productTabAreaServer: productTabAreaServer) { }

     getDatas() {
    this.productTabAreaServer
        .getProductTabArearDatas()
       .then(
                       productTabAreaDatas => this.productTabAreaDatas = productTabAreaDatas,
                       error =>  this.errorMessage = <any>error);    
     
  }


  ngOnInit() {
    this.getDatas();
  }

  changeTabs(a: number): void{
    this.productTabAreaServer
        .getchangeTabsDatas(a)
       .then(
                       productTabAreaDatas => this.productTabAreaDatas = productTabAreaDatas,
                       error =>  this.errorMessage = <any>error);  

       if(a==1){
         this.arrival = true;
         this.tranding = false;
         this.saler = false;
       }else if(a==2){
         this.arrival = false;
         this.tranding = false;
         this.saler = true;
       }else if(a==3){
         this.arrival = false;
         this.tranding = true;
         this.saler = false;
       }
  }


}