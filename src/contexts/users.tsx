/* eslint-disable react/jsx-no-constructed-context-values */
import { User } from '@/models/user';
import React, { createContext, useState } from 'react';

type UsersContextData = {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

const UserContext = createContext<UsersContextData>({} as UsersContextData);

function UsersProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [users, setUsers] = useState<UsersContextData['users']>(
    [] as UsersContextData['users'],
  );

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
}

const useUser = (): UsersContextData => React.useContext(UserContext);

export { UsersProvider, useUser };
