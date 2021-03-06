import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  apiUrl: string;

  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) {
    this.apiUrl = environment.baseUrl;
  }

  register(model: any) {
    return this.http.post(`${this.apiUrl}account/register`, model)
      .pipe(
        map((response) => {
          const user = response as User;
          if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            this.currentUserSource.next(user);
          }
        })
      );
  }


  login(model: any) {
    return this.http.post(`${this.apiUrl}account/login`, model)
      .pipe(
        map((response) => {
          const user = response as User;
          if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            this.currentUserSource.next(user);
          }
        })
      );
  }

  setCurrentUser(user: User) {
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next();
  }
}
