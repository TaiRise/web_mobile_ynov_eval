import { Injectable } from '@angular/core';

import { Auth } from '../models/auth.model';
import { UserLog } from '../models/user-log.model';

import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { BaseService } from './base.service';

@Injectable()
export class AuthService extends BaseService {
  private subject: Subject<UserLog> = new Subject<UserLog>();

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

  authUser = ({ email, password }): Observable<Auth> => {
    return this.post(`${environment.authUrl}auth`, {
      login: email,
      password
    }) as Observable<Auth>;
  };
}
