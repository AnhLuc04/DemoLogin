import {Injectable} from '@angular/core';
import {User} from '../model/user';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private URL_API = 'http://localhost:8080/users';
  private user: User;

  constructor(private http: HttpClient, private router: Router) {
  }

  // tslint:disable-next-line:typedef
  createCustomer(user: User): Observable<User> {
    return this.http.post<User>(this.URL_API, user);
  }

  loginUser(user: User): Observable<User> {
    return this.http.put<User>(this.URL_API + '/loign', user);
  }
}
