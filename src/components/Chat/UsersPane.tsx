import { User } from '@/models/user';

type UsersPaneProps = {
  users: User[];
};

export function UsersPane({ users }: UsersPaneProps): JSX.Element {
  return (
    <div className="border-r border-neutral p-4 w-96 overflow-auto">
      <ul className="flex flex-col items-center gap-6 ">
        {users.map(user => (
          <li key={user.id} className="flex gap-2 items-center">
            <span
              className={
                user.connected
                  ? `${user.role === 'ADMIN' ? 'text-primary' : 'text-accent'}`
                  : 'text-neutral-500'
              }
            >
              {user.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
