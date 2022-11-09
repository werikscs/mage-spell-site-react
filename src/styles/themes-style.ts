import { DefaultTheme } from "styled-components";

export const light: DefaultTheme = {
  theme: "light",
  colors: {
    primary: "#E9F0F2",
    secondary: "#FCFCFC",
    terciary: "#C1D2D9",
    text: "#394D59",
    accent: "#547A92",
    divider: "#6D90A650",
    shadow: "#6D90A675",
    shadowMenu: "#394D5950",
    generalBg: "#C1D2D9",
    transparent: "rgba(0,0,0,0)"
    
  },
  sizes: {
    headerHeight: "60px",
    sideMenu: '270px',
    sideMenuShadow: '100%',
    maxMobileScreen: 1024
  },
  animation: {
    fast: 0.1,
    normal: 0.25,
    slow: 0.75
  }
};

export const dark: DefaultTheme = {
  theme: "dark",
  colors: {
    primary: "#353535",
    secondary: "#1F1F1F",
    terciary: "#121212",
    text: "#C8C8C8",
    accent: "#94B9D1",
    divider: "#D5D5D550",
    shadow: "#00000050",
    shadowMenu: "#1F1F1F75",
    generalBg: "#121212",
    transparent: "rgba(0,0,0,0)"
  },
  sizes: {
    headerHeight: "60px",
    sideMenu: '270px',
    sideMenuShadow: '100%',
    maxMobileScreen: 1024
  },
  animation: {
    fast: 0.1,
    normal: 0.25,
    slow: 0.5
  }
};
