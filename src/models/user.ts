export type UserRole = 'ADMIN' | 'USER';

export type User = {
  id: string;
  name: string;
  role: UserRole;
  email: string;
  connected?: boolean;
};
