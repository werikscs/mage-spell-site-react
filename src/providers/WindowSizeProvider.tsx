import { useEffect, useState } from 'react';
import WindowSizeContext from '../context/WindowSizeContext';
import { IReactChildren } from '../interfaces-types/interfaces';

function WindowSizeProvider({ children }: IReactChildren) {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);

  const handleResize = () => {
    setWidth(() => window.innerWidth);
    setHeight(() => window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <WindowSizeContext.Provider value={{ width, height }}>
      {children}
    </WindowSizeContext.Provider>
  );
}

export default WindowSizeProvider;
