import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppComponentServer {


  private navDataUrl = 'mock-data/nav.json';
  constructor(private http: Http) { }

  getNavDatas (): Promise<any[]> {
    return this.http.get(this.navDataUrl)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
  }

   private extractData(res: Response) {
    let body = res.json();
    return body.navData || { };
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