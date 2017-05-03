import { Component } from '@angular/core';
import { visibilityChanged } from '../animations/fly-in';

@Component({
    moduleId:module.id,
    templateUrl: './checkout.component.html',
    animations: [ visibilityChanged ],
    styleUrls: [ '../default.css','../elegant-font.css','../responsive.css',"./checkout.component.css" ]
})

export class checkoutComponent {
    login: boolean = false;
    coupon: boolean = false;
    cbox: boolean = false;
    shipBox: boolean = false;
    headingOneIn: boolean = true;
    headingTwoIn: boolean = false;
    headingThreeIn: boolean = false;
    visibility = 'shown';
    isVisible: boolean = true;

    loginCtrl(){
        this.login = !this.login;
        this.isVisible = false;
    }
    couponCtrl(){
        this.coupon = !this.coupon;
    }
    cboxCtrl(){
        this.cbox = !this.cbox;
    }
    shipBoxCtrl(){
        this.shipBox = !this.shipBox;
    }
    headingOne(){
        this.headingOneIn=true;
        this.headingTwoIn=false;
        this.headingThreeIn=false;
    }
    headingTwo(){
        this.headingOneIn=false;
        this.headingTwoIn=true;
        this.headingThreeIn=false;
    }
    headingThree(){
        this.headingOneIn=false;
        this.headingTwoIn=false;
        this.headingThreeIn=true;
    }
}