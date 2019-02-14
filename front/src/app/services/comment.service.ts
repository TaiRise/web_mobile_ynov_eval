import { Injectable } from '@angular/core';

import { Comment } from '../models/comment.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable()
export class CommentService extends BaseService {
  save = (news: Comment): Observable<Comment> => {
    return this.post(`${environment.apiUrl}comments`, news, true) as Observable<
      Comment
    >;
  };
}
