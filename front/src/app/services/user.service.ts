import { Injectable } from '@angular/core';

import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getAll = (): Observable<User[]> => {
    return this.http.get(`${environment.apiUrl}users`) as Observable<User[]>;
  }

  save = (user: User): Observable<User> => {
    console.log('userAdded');
    return this.http.post<User>(`${environment.apiUrl}users`, user) as Observable<User>;
  }
}
