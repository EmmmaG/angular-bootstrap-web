import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class productTabAreaServer {


  private productTabArearDataUrl = 'mock-data/productTabArea1.json';
  constructor(private http: Http) { }

  getProductTabArearDatas (): Promise<any[]> {
    return this.http.get(this.productTabArearDataUrl)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
  };

  getchangeTabsDatas (a:number): Promise<any[]> {
    let changeTabsDatasUrl = 'mock-data/productTabArea'+a+'.json';
    return this.http.get(changeTabsDatasUrl)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
  };

   private extractData(res: Response) {
    let body = res.json();
    return body.productTabAreaDatas || { };
  }

  private handleError (error: Response | any) {
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