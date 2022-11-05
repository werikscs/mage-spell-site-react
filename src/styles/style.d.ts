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
      generalBg: string;
    };

    sizes: {
      headerHeight: string;
      sideMenuMobile: string;
      sideMenuDesktop: string;
    };
  }
}
