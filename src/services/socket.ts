import { io } from 'socket.io-client';

export const socket = io(import.meta.env.VITE_SOCKET_URL, {
  withCredentials: true,
  reconnection: false,
  autoConnect: false,
});
