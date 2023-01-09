import { ThemeProvider } from 'styled-components';
import { IReactChildren } from '../interfaces-types/interfaces';
import { dark, light } from '../styles/themes-style';
import ToggleThemeContext from '../context/ToggleThemeContext';
import ToggleMenuProvider from './ToggleMenuProvider';
import ToogleThemeProvider from './ToggleThemeProvider';
import WindowSizeProvider from './WindowSizeProvider';
import AuthenticateProvider from './AuthenticateProvider';

function Providers({ children }: IReactChildren) {
  return (
    <WindowSizeProvider>
      <AuthenticateProvider>
        <ToogleThemeProvider>
          <ToggleThemeContext.Consumer>
            {(value) => (
              <ThemeProvider theme={value.themeType === 'light' ? light : dark}>
                <ToggleMenuProvider>{children}</ToggleMenuProvider>
              </ThemeProvider>
            )}
          </ToggleThemeContext.Consumer>
        </ToogleThemeProvider>
      </AuthenticateProvider>
    </WindowSizeProvider>
  );
}

export default Providers;
