import { useUser } from '@/contexts/user';
import { Message } from '@/models/message';
import { useEffect } from 'react';
import { Socket } from 'socket.io-client';

const useSocketSetup = (
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
  socket: Socket,
): void => {
  const { setUser } = useUser();
  useEffect(() => {
    socket.connect();

    socket.on('messages', (messages: Message[]) => {
      setMessages(messages);
    });
    socket.on('connected', (status: boolean, username: string) => {
      console.info('connected', status, username);
    });
    socket.on('connect_error', () => {
      setUser(prev => ({ ...prev, connected: false }));
    });
    return () => {
      socket.off('connect_error');
      socket.off('connected');
      socket.off('messages');
    };
  }, [setUser, setMessages, socket]);
};

export default useSocketSetup;
