import { useContext, useEffect, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import ToggleThemeContext from '../context/ToggleThemeContext';
import { ThemeTypes } from '../interfaces-types/types';
import { dark, light } from '../styles/themes-style';

interface IUseCustomTheme {
  theme: DefaultTheme;
  inverseTheme: DefaultTheme;
  themeType: ThemeTypes;
}

function useCustomTheme(): IUseCustomTheme {
  const { themeType } = useContext(ToggleThemeContext);

  const [theme, setTheme] = useState(() =>
    themeType === 'light' ? light : dark
  );

  const [inverseTheme, setInverseTheme] = useState(() =>
    themeType === 'light' ? dark : light
  );

  useEffect(() => {
    setTheme(themeType === 'light' ? light : dark);
    setInverseTheme(themeType === 'light' ? dark : light);
  }, [themeType]);

  return { theme, inverseTheme, themeType };
}

export default useCustomTheme;
