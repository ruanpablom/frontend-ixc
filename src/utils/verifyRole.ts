import { UserRole } from '@/models/user';

export function verifyRole(permission: UserRole, userRole: UserRole): boolean {
  if (permission === 'USER' && (userRole === 'USER' || userRole === 'ADMIN')) {
    return true;
  }

  if (permission === 'ADMIN' && userRole === 'ADMIN') return true;

  return false;
}
