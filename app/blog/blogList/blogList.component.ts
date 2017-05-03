import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { blogServer } from '../blog.Server';

@Component({
    moduleId: module.id,
    templateUrl: './blogList.component.html',
    styleUrls: ['../../default.css', '../../elegant-font.css', '../../responsive.css', '../blog.component.css']
})

export class blogListComponent implements OnInit {
    blogDatas: any[];
    errorMessage: string;
    blogData: any;

    constructor(
        private router: Router,
        private blogServer: blogServer
    ){}

    getDatas(): void {
        this.blogServer.getblogDatas().then(
            blogDatas => this.blogDatas = blogDatas.slice(0,6),
            error => this.errorMessage = <any>error
        );
    }

    ngOnInit(): void {
        this.getDatas();
    }

    goDetails(blogItem:any) {
      this.blogData = blogItem;
      this.router.navigate(['/blog/blogDetails', blogItem.id]);
      document.documentElement.scrollTop = document.body.scrollTop =0;
    }
}