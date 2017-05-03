import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class cartServer{ 
    private productTabAreaDataUrl = 'mock-data/cart.jason';

    constructor(private http: Http){}

    getCartDatas(): Promise<any[]> {
        return this.http.get(this.productTabAreaDataUrl)
                        .toPromise()
                        .then(this.extractData)
                        .then(this.handleError);
    }

    private extractData(res: Response){
        let body = res.json();
        return body.cartDatas || { };
    }

    private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
} 