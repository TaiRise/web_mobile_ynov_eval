import { User } from './user.model';
import { Comment } from './comment.model';

export class News {
  _id: string;
  title: string;
  content: string;
  author: User;
}
