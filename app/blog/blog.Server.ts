import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class blogServer{
    private blogDataUrl = 'mock-data/blog.json';
    private commentsUrl = 'mock-data/comments.json';

    constructor(private http: Http){}

    getblogDatas(): Promise<any[]> {
        return this.http.get(this.commentsUrl)
                        .toPromise()
                        .then(this.extractData)
                        .catch(this.handleError)
    } ;
    
    getcommentsDatas (): Promise<any[]> {
    return this.http.get(this.commentsUrl)
                    .toPromise()
                    .then(this.extractDataComment)
                    .catch(this.handleError);
  };

    getblogData(id: number | string) {
        return this.getblogDatas()
                   .then(blogDatas => blogDatas.find(productData => productData.id === +id));
    }

    addcommentData (newMessage: string): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.commentsUrl, { newMessage }, options)
               .toPromise()
               .then(this.extractDataComment)
               .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.blogDatas || { };
  }

  private extractDataComment(res: Response) {
    let body = res.json();
    return body.comments || { };
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