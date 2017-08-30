import { Injectable } from '@angular/core';
import {User} from './user';
import {Http,Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
 users: User[];
 isLoggedin=false;
 public token: string;
  constructor(private http: Http,private router:Router) {
      var currentUser=JSON.parse(localStorage.getItem('currentUser'));
      this.token=currentUser&& currentUser.token;
  }
  getUsers() {
    let headers = new Headers({ 'Authorization': 'Bearer '  });
        let options = new RequestOptions({ headers: headers });
    return this.http.get('http://localhost:8080/allUsers',options)
      .toPromise().then(res => < User[]>res.json());
  }

   logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
 


}
