import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      terciary: string;
      text: string;
      accent: string;
      divider: string;
      shadow: string;
    };

    sizes: {
      headerHeight: string;
    };
  }
}
