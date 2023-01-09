import { createContext } from 'react';

interface IAutheticateContext {
  isLogged: boolean;
  toggleAuthenticate: (newState: boolean) => void;
}

const AutheticateContext = createContext<IAutheticateContext>({
  isLogged: false,
  toggleAuthenticate: () => {},
});

export default AutheticateContext;
