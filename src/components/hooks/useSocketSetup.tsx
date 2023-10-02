import { useUser } from '@/contexts/user';
import { Message } from '@/models/message';
import { User } from '@/models/user';
import { useEffect } from 'react';
import { Socket } from 'socket.io-client';

const useSocketSetup = (
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
  setUsers: React.Dispatch<React.SetStateAction<User[]>>,
  socket: Socket,
): void => {
  const { setUser } = useUser();
  useEffect(() => {
    socket.connect();

    socket.on('messages', (messages: Message[]) => {
      setMessages(messages);
    });

    socket.on('message', (message: Message) => {
      setMessages(prev => [...prev, message]);
    });

    socket.on('connected', (status: boolean, id: string) => {
      console.info('connected', status, id);
      setUsers(prev =>
        prev.map(user =>
          user.id === id ? { ...user, connected: status } : user,
        ),
      );
    });

    socket.on('disconnected', (id: string) => {
      console.info('connected', id);
      setUsers(prev =>
        prev.map(user =>
          user.id === id ? { ...user, connected: false } : user,
        ),
      );
    });

    socket.on('users', (users: User[]) => {
      setUsers(users);
    });

    socket.on('connect_error', () => {
      setUser(prev => ({ ...prev, connected: false }));
    });
    return () => {
      socket.off('connect_error');
      socket.off('connected');
      socket.off('messages');
      socket.off('message');
      socket.off('users');
      socket.disconnect();
    };
  }, [setUser, setMessages, socket, setUsers]);
};

export default useSocketSetup;
