import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class onsleproAreaServer{

    private onsleproAreaDataUrl = "mock-data/pnsleproArea.json";
    constructor(private http: Http) {}

    getOnsleproAreaDatas(): Promise<any[]> {
        return this.http.get(this.onsleproAreaDataUrl)
                        .toPromise()
                        .then(this.extraData)
                        .catch(this.handleError);
    }

    private extraData(res:Response){
        let body = res.json();
        return body.onsleproAreaData || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } 
        else {
            errMsg = error.message ? error.message : error.toString();
        }
    console.error(errMsg);
    return Promise.reject(errMsg);
    }
}