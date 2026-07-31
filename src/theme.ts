import { DefaultTheme, Theme } from "@react-navigation/native";
import { Appearance, ColorSchemeName } from "react-native";

export interface AppTheme {
  mode: string;
  colors: {
    primary: {
      main: string;
      soft: string;
      strong: string;
    };
    text: {
      default: string;
      muted: string;
      onPrimary: string;
      placeholder: string;
    };
    background: {
      app: string;
      card: string;
      overlay: string;
    };
    border: {
      default: string;
      soft: string;
      focus: string;
      primary: string;
    };
    error: {
      main: string;
      surface: string;
    };
  };
  spacing: {
    xxs: number;
    xs: number;
    smPlus: number;
    sm: number;
    md: number;
    lgPlus: number;
    lg: number;
    xl: number;
  };
  radius: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  typography: {
    bodySm: number;
    bodyMd: number;
    bodyLg: number;
    section: number;
    title: number;
    hero: number;
  };
  sizes: {
    controlHeight: number;
    searchInputHeight: number;
    icon: number;
    textAreaHeight: number;
    borderThin: number;
    borderRegular: number;
    borderThick: number;
  };
}

const sharedTokens = {
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

const lightTheme: AppTheme = {
  mode: "light",
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
      focus: "#1e60aa",
      primary: "#2a7ad6",
    },
    error: {
      main: "#c91111",
      surface: "#ffd7d7",
    },
  },
  ...sharedTokens,
};

const darkTheme: AppTheme = {
  mode: "dark",
  colors: {
    primary: {
      main: "#5c9fff",
      soft: "#2f5e9d",
      strong: "#2f5e9de8",
    },
    text: {
      default: "#e6ebf2",
      muted: "#aeb8c7",
      onPrimary: "#f7fbff",
      placeholder: "#5e636b",
    },
    background: {
      app: "#060b14",
      card: "#11151b",
      overlay: "#c4c9cea6",
    },
    border: {
      default: "#3b4452",
      soft: "#5d6675",
      focus: "#79b2ff",
      primary: "#5c9fff",
    },
    error: {
      main: "#ff5c5c",
      surface: "#4f1e1e",
    },
  },
  ...sharedTokens,
};

export const getAppTheme = (scheme?: ColorSchemeName): AppTheme => {
  const resolvedScheme = scheme ?? Appearance.getColorScheme();
  return resolvedScheme === "dark" ? darkTheme : lightTheme;
};

export const getNavigationTheme = (scheme?: ColorSchemeName): Theme => {
  const activeTheme = getAppTheme(scheme);
  return {
    ...DefaultTheme,
    dark: activeTheme.mode === "dark",
    colors: {
      ...DefaultTheme.colors,
      primary: activeTheme.colors.primary.main,
      background: activeTheme.colors.background.app,
      card: activeTheme.colors.background.card,
      text: activeTheme.colors.text.default,
      border: activeTheme.colors.border.default,
      notification: activeTheme.colors.primary.main,
    },
  };
};

export const appTheme = getAppTheme("light");
export const navigationTheme = getNavigationTheme("light");
