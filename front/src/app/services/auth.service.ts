import { Injectable } from '@angular/core';

import { Auth } from '../models/auth.model';
import { UserLog } from '../models/user-log.model';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class AuthService {
  private subject: Subject<UserLog> = new Subject<UserLog>();

  constructor(private http: HttpClient) {}

  get user(): Observable<UserLog> {
    return this.subject.asObservable();
  }

  updateUser = (userLog: UserLog) => {
    if (userLog === null) {
      sessionStorage.clear();
    } else {
      sessionStorage.setItem('USER', JSON.stringify(userLog));
    }
    this.subject.next(userLog);
  };

  auth = ({ email, password }): Observable<Auth> => {
    return this.http.post(environment.authUrl, {
      login: email,
      password
    }) as Observable<Auth>;
  };
}
