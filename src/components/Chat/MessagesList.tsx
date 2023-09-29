import { Message } from '@/models/message';
import { useEffect, useRef } from 'react';
import { MessageItem } from './MessageItem';

type MessagesListProps = {
  messages: Message[];
};

export function MessagesList({ messages }: MessagesListProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length) {
      ref.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  }, [messages.length]);

  return (
    <ul id="messages" className="flex flex-col gap-4 items-end overflow-auto">
      {messages.map(message => (
        <MessageItem key={message.id} message={message} />
      ))}
      <div ref={ref} />
    </ul>
  );
}
