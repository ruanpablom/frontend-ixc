import { UserRole } from '@/models/user';

export function verifyRole(role: UserRole, userRole: UserRole): boolean {
  if (role === 'user' && (userRole === 'user' || userRole === 'admin')) {
    return true;
  }

  if (role === 'admin' && userRole === 'admin') return true;

  return false;
}
