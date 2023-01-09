import { useState } from 'react';
import AutheticateContext from '../context/AuthenticateContex';
import { IReactChildren } from '../interfaces-types/interfaces';

function AuthenticateProvider({ children }: IReactChildren) {
  const [isLogged, setIsLogged] = useState(false);

  const toggleAuthenticate = (newState: boolean) => {
    setIsLogged(() => newState);
  };

  return (
    <AutheticateContext.Provider value={{ isLogged, toggleAuthenticate }}>
      {children}
    </AutheticateContext.Provider>
  );
}

export default AuthenticateProvider;
