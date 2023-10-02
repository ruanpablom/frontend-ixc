import { useMessages } from '@/contexts/messages';
import { useSocket } from '@/contexts/socket';
import { InputMessage } from './InputMessage';
import { MessagesList } from './MessagesList';
import useSocketSetup from '../hooks/useSocketSetup';

// import { messages } from './mock/data';

export function Chat(): JSX.Element {
  const { messages, setMessages } = useMessages();
  const { socket } = useSocket();

  useSocketSetup(setMessages, socket);

  return (
    <div className="flex flex-col gap-6 w-full h-full border-2 border-neutral p-4 md:p-16 rounded-md text-neutral-400">
      <div id="messages-container" className="flex flex-col justify-end h-full">
        <MessagesList messages={messages} />
        <InputMessage />
      </div>
    </div>
  );
}
