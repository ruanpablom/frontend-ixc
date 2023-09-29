import { BiSend } from 'react-icons/bi';
import { MessagesList } from './MessagesList';

import { messages } from './mock/data';

export function Chat(): JSX.Element {
  return (
    <div className="flex flex-col gap-6 w-full h-full border-2 border-neutral p-4 md:p-16 rounded-md text-neutral-400">
      <div
        id="messages-container"
        className="flex flex-col  h-full overflow-auto"
      >
        {/* <ul id="messages" className="flex flex-col items-end">
          <MessageItem
            message={{
              createdAt: new Date(),
              id: '1',
              text: 'Essa é uma nova mensagems',
              user: { id: '1', username: 'ruanpablom' },
            }}
          />
        </ul> */}
        <MessagesList messages={messages} />
      </div>
      <div className="flex flex-row gap-2 justify-between items-center">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-accent w-full"
        />
        <button
          id="send-message-button"
          type="button"
          className="rounded-full bg-accent w-fit h-fit p-3 flex items-center justify-center"
        >
          <BiSend fill="#e2e2e2" size={28} />
        </button>
      </div>
    </div>
  );
}
