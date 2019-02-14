import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { UserLog } from '../models/user-log.model';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class BaseService {
  private userLog: UserLog = null;

  constructor(protected http: HttpClient, private auth: AuthService) {
    auth.user.subscribe(data => (this.userLog = data));
  }

  private headers(hasToBeAuth): any {
    if (this.userLog && hasToBeAuth) {
      return new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: 'Bearer ' + this.userLog.token
      });
    }
    return null;
  }

  get(url: string, hasToBeAuth: boolean = false): Observable<any> {
    return this.http.get(url, { headers: this.headers(hasToBeAuth) });
  }

  post(url: string, body: any, hasToBeAuth: boolean = false): Observable<any> {
    return this.http.post(url, body, this.headers(hasToBeAuth));
  }
}
