import { useUser } from '@/contexts/user';
import { Message } from '@/models/message';
import { useRef } from 'react';
import { BiSend } from 'react-icons/bi';
import { useSocket } from '@/contexts/socket';

export function InputMessage(): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const { user } = useUser();
  const { socket } = useSocket();

  const handleSendMessage = () => {
    if (inputRef.current?.value) {
      const message: Message = {
        text: inputRef.current?.value as string,
        userId: user.id,
      };
      socket.emit('message', message);
      inputRef.current.value = '';
    }
  };

  return (
    <div className="flex flex-row gap-2 justify-between items-center">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-accent w-full"
        ref={inputRef}
      />
      <button
        id="send-message-button"
        type="button"
        className="rounded-full bg-accent w-fit h-fit p-3 flex items-center justify-center"
        onClick={handleSendMessage}
      >
        <BiSend fill="#e2e2e2" size={28} />
      </button>
    </div>
  );
}
