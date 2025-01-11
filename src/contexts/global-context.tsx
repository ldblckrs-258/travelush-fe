'use client';

import { IUser } from '@/interfaces/user';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

interface IGlobalContext {
  user: IUser | undefined;
  setUser: Dispatch<SetStateAction<IUser | undefined>>;
}

const INIT = {
  user: undefined,
  func: () => {},
};

const useGlobalStore = () => {
  const [user, setUser] = useState<IUser | undefined>(INIT.user);

  return {
    user,
    setUser,
  };
};

const GlobalContext = createContext<IGlobalContext>({
  user: INIT.user,
  setUser: INIT.func,
});

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const store = useGlobalStore();

  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};

const useGlobal = (): IGlobalContext => {
  return useContext(GlobalContext);
};

export { GlobalProvider, useGlobal };
