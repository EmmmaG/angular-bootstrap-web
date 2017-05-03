import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class shopServer {
    private shopDataUrl = 'mock-data/products.json';
    constructor(private http: Http){}

    getShopDatas (): Promise<any[]> {
        return this.http.get(this.shopDataUrl)
                        .toPromise()
                        .then(this.extractData)
                        .then(this.handleError);
    }

    getProductData (id:number | string){
        return this.getShopDatas()
                   .then(productDatas => productDatas.find(productData => productData.id === +id));
    }

    private extractData(res: Response){
        let body = res.json();
        return body.productDatas || {};
    }
    private handleError (error: Response | any) {
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