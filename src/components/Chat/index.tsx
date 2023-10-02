import { useMessages } from '@/contexts/messages';
import { useSocket } from '@/contexts/socket';
import { useUsers } from '@/contexts/users';
import { InputMessage } from './InputMessage';
import { MessagesList } from './MessagesList';
import useSocketSetup from '../hooks/useSocketSetup';
import { UsersPane } from './UsersPane';

// import { messages } from './mock/data';

export function Chat(): JSX.Element {
  const { messages, setMessages } = useMessages();
  const { users, setUsers } = useUsers();
  const { socket } = useSocket();

  useSocketSetup(setMessages, setUsers, socket);

  return (
    <div className="flex gap-6 w-full h-full border-2 border-neutral rounded-md text-neutral-400">
      <UsersPane users={users} />
      <div
        id="messages-container"
        className="flex w-full p-4 flex-col justify-end h-full"
      >
        <MessagesList messages={messages} />
        <InputMessage />
      </div>
    </div>
  );
}
