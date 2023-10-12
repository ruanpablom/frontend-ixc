import { User } from '@/models/user';

export function orderUsersByNameAndConnectionsStatus(users: User[]): User[] {
  const connectedUsers = users
    .filter(user => user.connected)
    .sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  const disconnectedUsers = users
    .filter(user => !user.connected)
    .sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  return [...connectedUsers, ...disconnectedUsers];
}
