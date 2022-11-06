import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    theme: string;

    colors: {
      primary: string;
      secondary: string;
      terciary: string;
      text: string;
      accent: string;
      divider: string;
      shadow: string;
      shadowMenu: string
      generalBg: string;
    };

    sizes: {
      headerHeight: string;
      sideMenu: string;
      sideMenuShadow: string;
    };

    animation: {
      fast: number;
      normal: number;
      slow: number;
    }
  }
}
