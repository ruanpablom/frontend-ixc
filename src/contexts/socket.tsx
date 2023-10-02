/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from 'react';
import { Socket } from 'socket.io-client';

type SocketContextData = {
  socket: Socket;
  setSocket: React.Dispatch<React.SetStateAction<Socket>>;
};

const SocketContext = createContext<SocketContextData>({} as SocketContextData);

function SocketProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [socket, setSocket] = useState<SocketContextData['socket']>(
    {} as SocketContextData['socket'],
  );

  return (
    <SocketContext.Provider value={{ socket, setSocket }}>
      {children}
    </SocketContext.Provider>
  );
}

const useSocket = (): SocketContextData => React.useContext(SocketContext);

export { SocketProvider, useSocket };
