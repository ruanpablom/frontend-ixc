/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from 'react';

type UserContextData = {
  user: {
    id: string;
    username: string;
  };
  setUser: (user: UserContextData['user']) => void;
};

const UserContext = createContext<UserContextData>({} as UserContextData);

function UserProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [user, setUser] = useState<UserContextData['user']>(
    {} as UserContextData['user'],
  );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

const useUser = (): UserContextData => React.useContext(UserContext);

export { UserProvider, useUser };
