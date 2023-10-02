import { Chat } from '@/components/Chat';
import { SocketProvider } from '@/contexts/socket';
import { UsersProvider } from '@/contexts/users';

export function Home(): JSX.Element {
  return (
    <div className="p-4 md:p-14 h-full">
      <SocketProvider>
        <UsersProvider>
          <Chat />
        </UsersProvider>
      </SocketProvider>
    </div>
  );
}
