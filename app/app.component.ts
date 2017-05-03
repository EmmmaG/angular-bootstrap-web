import { Component, OnInit } from '@angular/core';

import { AppComponentServer }  from './app.componentServer';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls:["./default.css","./elegant-font.css","./footer.css","./app.component.css"]
})

export class AppComponent implements OnInit { 
  navDatas: any[];
  errorMessage: string;

constructor(
   private appComponentServer: AppComponentServer
    ) { }
  ngOnInit(): void {
    this.getNavDatas();
   }
  getNavDatas(): void {
  	this.appComponentServer.getNavDatas().then(
                       navDatas => this.navDatas = navDatas,
                       error =>  this.errorMessage = <any>error);
  }

 

  
  

 
 

}
