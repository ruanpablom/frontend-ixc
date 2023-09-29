/* eslint-disable react/jsx-no-constructed-context-values */
import { User } from '@/models/user';
import React, { createContext, useState } from 'react';

type UserContextData = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

const UserContext = createContext<UserContextData>({} as UserContextData);

function UserProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [user, setUser] = useState<UserContextData['user']>({
    id: '1',
    username: 'ruanpablom',
  } as UserContextData['user']);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

const useUser = (): UserContextData => React.useContext(UserContext);

export { UserProvider, useUser };
