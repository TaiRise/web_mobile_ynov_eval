import { News } from './news.model';
import { User } from './user.model';

export class Comment {
  _id: string;
  title: string;
  content: string;
  new: News;
  author: User;
}
