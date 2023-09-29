import { InputMessage } from './InputMessage';
import { MessagesList } from './MessagesList';

import { messages } from './mock/data';

export function Chat(): JSX.Element {
  return (
    <div className="flex flex-col gap-6 w-full h-full border-2 border-neutral p-4 md:p-16 rounded-md text-neutral-400">
      <div id="messages-container" className="flex flex-col  h-full">
        <MessagesList messages={messages} />
        <InputMessage />
      </div>
    </div>
  );
}
