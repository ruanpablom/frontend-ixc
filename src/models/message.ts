import { User } from './user';

export type Message = {
  id?: string;
  text: string;
  createdAt?: Date;
  userId: string;
  user?: User;
};
