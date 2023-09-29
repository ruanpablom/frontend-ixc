import { User } from './user';

export type Message = {
  id: string;
  text: string;
  createdAt: Date;
  user: User;
};
