import { useContext, useEffect, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import ToggleThemeContext from '../context/ToggleThemeContext';
import { dark, light } from '../styles/themes-style';

interface IUseCustomTheme {
  theme: DefaultTheme;
  inverseTheme: DefaultTheme;
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

  return { theme, inverseTheme };
}

export default useCustomTheme;
