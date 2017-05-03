import { Component, OnInit } from '@angular/core';

import {  CategoryBannerServer } from './category-bannerServer';


@Component({
  moduleId: module.id,
  selector: 'category-banner',
  templateUrl: 'category-banner.html',
  styleUrls: ['./category-banner.css']
})

export class CategoryBanner implements OnInit { 
  categoryBannerDatas: any[];
  errorMessage: string;

  constructor(
    private categoryBannerServer: CategoryBannerServer) { }

  getDatas(): void {
    this.categoryBannerServer
        .getCategoryBannerDatas()
        .then(
                       categoryBannerDatas => this.categoryBannerDatas = categoryBannerDatas,
                       error =>  this.errorMessage = <any>error);
      
  }
 
  ngOnInit(): void {
    this.getDatas();
   
  }



}
