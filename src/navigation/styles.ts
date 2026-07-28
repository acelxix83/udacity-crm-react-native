import { DefaultTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

const stylesFn = () => {
  return StyleSheet.create({
    navigatorBackground: {
      // backgroundColor: "#1E1E1E"
    },
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      marginTop: 10,
      color: "#2a7ad6",
    },
    spinner: {
      color: "#2a7ad6",
    },
  });
};

export const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#2a7ad6",
    // background: "#1E1E1E",
    // text: "#fff",
    // card: "#2a2a2a",
    // border: "#2a2a2a",
    // notification: "#2a7ad6",
  },
  dark: DefaultTheme.dark,
  fonts: {
    ...DefaultTheme.fonts,
  },
};

export default stylesFn;
