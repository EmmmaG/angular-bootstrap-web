import { Component, OnInit, Input   } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { blogServer } from '../blog.Server';

export class Hero {
  id: number;
}

@Component({
    moduleId:module.id,
    templateUrl: './blogDetails.component.html',
    styleUrls: ['../../default.css', '../../elegant-font.css', '../../responsive.css','./blogDetails.component.css']
})

export class blogDetailsComponent implements OnInit {
    blogDatas: any[];
    errorMessage: string;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private blogServer: blogServer
    ) {}

    @Input() blogData:any = Hero;

    ngOnInit(): void {
        this.route.params.switchMap((params: Params) => this.blogServer.getblogData(+params['id']))
                         .subscribe(blogData => this.blogData = blogData);
        
        this.getComments()
    }

    getComments(): void {
        this.blogServer.getcommentsDatas()
                       .then(
                           blogDatas => this.blogDatas = blogDatas,
                           error => this.errorMessage = <any>error
                       );
    }

    addComment(newName:string,newEmail:string,newMessage:string) {
     if (!newMessage) {
       return;
     }else if(!newName){
         return;
     }
    let date = new Date();
    let result = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();


    let comment = {"id":"","date":result,"content":newMessage,"user":newName,"url":"../assets/img/blog/comment.jpg","userComment":false,"email":newEmail};
    /*console.log(comment);*/
    this.blogDatas.push(comment);
  }

}