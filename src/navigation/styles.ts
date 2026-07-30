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
    h1: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#fff",
    },
    spinner: {
      color: "#fff",
    },
    overlay: {
      padding: 20,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "100%",
      backgroundColor: "#00000086",
      zIndex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    overlayMessageContainer: {
      padding: 10,
      width: "80%",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#2a7ad6",
      backgroundColor: "#2a7ad6e8",
      alignItems: "center",
      justifyContent: "center",
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
