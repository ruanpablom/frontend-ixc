import { useUser } from '@/contexts/user';
import { Message } from '@/models/message';
import { User } from '@/models/user';
import { useEffect } from 'react';
import { Socket } from 'socket.io-client';

const useSocketSetup = (
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
  setUsers: React.Dispatch<React.SetStateAction<User[]>>,
  socket: Socket,
  setIsChatOnline: React.Dispatch<React.SetStateAction<boolean>>,
): void => {
  const { setUser } = useUser();

  useEffect(() => {
    socket.connect();

    socket.on('message', (message: Message) => {
      setMessages(prev => [...prev, message]);
    });

    socket.on('messages', (messages: Message[]) => {
      setMessages(messages);
    });

    socket.on('connected', (status: boolean, id: string) => {
      console.info('connected', status, id);
      setIsChatOnline(true);
      setUsers(prev =>
        prev.map(user =>
          user.id === id ? { ...user, connected: status } : user,
        ),
      );
    });

    socket.on('newUserConnected', (status: boolean, id: string) => {
      console.info('newUserConnected', status, id);
      setIsChatOnline(true);
      setUsers(prev =>
        prev.map(user =>
          user.id === id ? { ...user, connected: status } : user,
        ),
      );
    });

    socket.on('disconnectedUser', (userId: string) => {
      console.info('disconnectedUser', userId);
      setUsers(prev =>
        prev.map(user =>
          user.id === userId ? { ...user, connected: false } : user,
        ),
      );
    });

    socket.on('users', (users: User[]) => {
      setUsers(users);
    });

    socket.on('connect_error', () => {
      setUser(prev => ({ ...prev, connected: false }));
    });

    const tryReconnect = () => {
      console.info('try reconnect');
      setTimeout(() => {
        socket.connect();
      }, 2000);
    };

    socket.io.on('close', () => {
      console.info('close');
      setIsChatOnline(false);
      tryReconnect();
    });

    return () => {
      socket.off('connect_error');
      socket.off('connected');
      socket.off('newUserConnected');
      socket.off('messages');
      socket.off('message');
      socket.off('users');
      socket.off('disconnectedUser');
      socket.off('disconnect');
      socket.io.off('close');
      socket.disconnect();
    };
  }, [setUser, setMessages, socket, setUsers, setIsChatOnline]);
};

export default useSocketSetup;
