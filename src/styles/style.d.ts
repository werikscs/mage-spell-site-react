import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    type: string;

    colors: {
      primary: string;
      secondary: string;
      terciary: string;
      text: string;
      accent: string;
      divider: string;
      shadow: string;
      shadowMenu: string;
      generalBg: string;
      hover: string;
      transparent: string;
    };

    sizes: {
      headerHeight: string;
      genericElementHeight: string;
      sideMenu: string;
      sideMenuShadow: string;
      maxMobileScreen: number;
    };

    animation: {
      fast: number;
      normal: number;
      slow: number;
    };
  }
}
