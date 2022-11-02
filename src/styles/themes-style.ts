import { DefaultTheme } from "styled-components";

export const light: DefaultTheme = {
  theme: "light",
  colors: {
    primary: "#E9F0F2",
    secondary: "#FCFCFC",
    terciary: "#C1D2D9",
    text: "#394D59",
    accent: "#547A92",
    divider: "#6D90A625",
    shadow: "#6D90A675",
    generalBg: "#C1D2D9",
  },
  sizes: {
    headerHeight: "60px",
  },
};

export const dark: DefaultTheme = {
  theme: "dark",
  colors: {
    primary: "#242424",
    secondary: "#1F1F1F",
    terciary: "",
    text: "#C8C8C8",
    accent: "#94B9D1",
    divider: "",
    shadow: "#00000050",
    generalBg: "#121212",
  },
  sizes: {
    headerHeight: "60px",
  },
};
