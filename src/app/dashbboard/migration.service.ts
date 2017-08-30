import { Injectable, Pipe, PipeTransform  } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Migration} from './migration';

@Injectable()
export class MigrationService   {
mig:Migration;
  constructor(private http: Http) {
    
   }
    getResponsePromise(): Promise<String> {
        return this.http.get('http://localhost:8080/login').toPromise()
	    .then(this.extractData)
	    .catch(this.handleErrorPromise);
    }
  
    private handleErrorPromise (error: Response | any) {
	console.error(error.message || error);
	return Promise.reject(error.message || error);
    }
     private extractData(res: Response) {
	let body = res.json();
        return body;
    }
   public Migration(mig:Migration): Observable<any> {

    
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option


    return this.http.post('http://localhost:8080/migration',mig, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
     
  }

  
  getUsers(): Promise<Migration[]> {
    return this.http.get('http://localhost:8080/History')
      .toPromise()
      .then(response => response.json() as Migration[])
      .catch(this.handleError);
  }
   private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }


}
