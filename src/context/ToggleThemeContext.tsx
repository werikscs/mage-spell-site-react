import { createContext } from 'react';
import { ThemeTypes } from '../interfaces-types/types';

interface IToggleThemeContext {
  themeType: ThemeTypes;
  toggleTheme: () => void;
}

const ToggleThemeContext = createContext<IToggleThemeContext>({
  themeType: 'light',
  toggleTheme: () => {},
});

export default ToggleThemeContext;
