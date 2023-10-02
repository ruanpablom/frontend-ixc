import { useUser } from '@/contexts/user';
import { Message } from '@/models/message';

type MessageItemProps = {
  message: Message;
};

export function MessageItem({ message }: MessageItemProps): JSX.Element {
  const { user } = useUser();

  return (
    <li
      className={`bg-base-300 rounded-lg p-2 flex flex-col gap-2 w-fit ${
        user.id === message.user?.id ? 'self-start' : 'self-end'
      }`}
    >
      <div className="flex gap-6 justify-between">
        <span className="text-accent">{message.user?.name}</span>
        <span className="text-sm text-neutral-400">
          {new Date(message.createdAt!).toLocaleString()}
        </span>
      </div>
      <p>{message.text}</p>
    </li>
  );
}
