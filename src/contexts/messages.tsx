/* eslint-disable react/jsx-no-constructed-context-values */
import { Message } from '@/models/message';
import React, { createContext, useState } from 'react';

type MessagesContextData = {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
};

const MessagesContext = createContext<MessagesContextData>(
  {} as MessagesContextData,
);

function MessagesProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [messages, setMessages] = useState<MessagesContextData['messages']>(
    [] as MessagesContextData['messages'],
  );

  return (
    <MessagesContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessagesContext.Provider>
  );
}

const useMessages = (): MessagesContextData =>
  React.useContext(MessagesContext);

export { MessagesProvider, useMessages };
