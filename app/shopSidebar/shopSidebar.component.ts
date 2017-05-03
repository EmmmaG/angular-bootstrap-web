import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: 'shopSidebar.component.html',
  styleUrls:['./shopSidebar.component.css','../default.css','../elegant-font.css','../responsive.css']
})

export class shopSidebarComponent implements OnInit { 
	changeNumberResult:number = 6;

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

    ]

    ngOnInit(): void {
    this.changeNumberResult ;
    /*window.localStorage.setItem("showNumber",6);*/
  }

    changeNumber(showNumber:number):void{
		
       	this.showNumbers.forEach(function(item:any,index:number){
    			if(item.number == showNumber){
    				item.active = true;
    			}else{
    				item.active = false;
    			}
    		});

       	this.changeNumberResult = showNumber;
       	//console.log("aaa+"+this.changeNumberResult);


	}

	

}