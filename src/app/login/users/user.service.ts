import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions, URLSearchParams} from '@angular/http';
import {User} from './user';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class UserService {
  constructor(private http: Http) {

  }




  getUsers(): Promise<User[]> {
    return this.http.get('http://localhost:8080/allUsers')
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }





 CreateUser(user:User): Observable<any> {

    
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option


    return this.http.post('http://localhost:8080/create',user, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
     
  }

 

  deleteUser(user: User): Promise<void> {
    const url = `${'http://localhost:8080'}/delete/${user.id}`;
    return this.http.get(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
