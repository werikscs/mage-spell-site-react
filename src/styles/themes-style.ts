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
    shadowMenu: "#394D5950",
    generalBg: "#C1D2D9",
  },
  sizes: {
    headerHeight: "60px",
    sideMenu: '270px',
    sideMenuShadow: '320px'
  },
  animation: {
    duration: 0.25
  }
};

export const dark: DefaultTheme = {
  theme: "dark",
  colors: {
    primary: "#242424",
    secondary: "#1F1F1F",
    terciary: "#121212",
    text: "#C8C8C8",
    accent: "#94B9D1",
    divider: "",
    shadow: "#00000050",
    shadowMenu: "#1F1F1F75",
    generalBg: "#121212",
  },
  sizes: {
    headerHeight: "60px",
    sideMenu: '270px',
    sideMenuShadow: '320px'
  },
  animation: {
    duration: 0.25
  }
};
