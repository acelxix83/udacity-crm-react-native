import { DefaultTheme, Theme } from "@react-navigation/native";

export const appTheme = {
  mode: "light" as const,
  colors: {
    primary: {
      main: "#2a7ad6",
      soft: "#5996db",
      strong: "#2a7ad6e8",
    },
    text: {
      default: "#121212",
      muted: "#4a4a4a",
      onPrimary: "#fff",
      placeholder: "#bbb",
    },
    background: {
      app: "#fff",
      card: "#fff",
      overlay: "#00000086",
    },
    border: {
      default: "#ccc",
      soft: "gray",
      focus: "blue",
      primary: "#2a7ad6",
    },
    error: {
      main: "#c91111",
      surface: "#fff4f4",
    },
  },
  spacing: {
    xxs: 2,
    xs: 4,
    smPlus: 5,
    sm: 8,
    md: 10,
    lgPlus: 15,
    lg: 20,
    xl: 25,
  },
  radius: {
    sm: 5,
    md: 8,
    lg: 10,
    xl: 20,
  },
  typography: {
    bodySm: 14,
    bodyMd: 16,
    bodyLg: 18,
    section: 20,
    title: 24,
    hero: 28,
  },
  sizes: {
    controlHeight: 50,
    searchInputHeight: 40,
    icon: 20,
    textAreaHeight: 120,
    borderThin: 0.5,
    borderRegular: 1,
    borderThick: 2,
  },
};

export const navigationTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: appTheme.colors.primary.main,
    background: appTheme.colors.background.app,
    card: appTheme.colors.background.card,
    text: appTheme.colors.text.default,
    border: appTheme.colors.border.default,
    notification: appTheme.colors.primary.main,
  },
};
