import { Chat } from '@/components/Chat';
import { MessagesProvider } from '@/contexts/messages';
import { SocketProvider } from '@/contexts/socket';
import { UsersProvider } from '@/contexts/users';

export function Home(): JSX.Element {
  return (
    <div className="p-4 md:p-14 w-full h-full">
      <SocketProvider>
        <MessagesProvider>
          <UsersProvider>
            <Chat />
          </UsersProvider>
        </MessagesProvider>
      </SocketProvider>
    </div>
  );
}
