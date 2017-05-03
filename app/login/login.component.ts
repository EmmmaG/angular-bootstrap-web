import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: './login.component.html',
    styleUrls: ['../default.css','../elegant-font.css','../responsive.css','./login.component.css']
})

export class loginComponent {
    constructor(private router: Router){}

    goHome(){
        this.router.navigate(['./home']);
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
}

