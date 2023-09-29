export type UserRole = 'admin' | 'user';

export type User = {
  id: string;
  username: string;
  role: UserRole;
};
