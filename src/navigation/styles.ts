import { appTheme, navigationTheme } from "@/src/theme";
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
      fontSize: appTheme.typography.title,
      fontWeight: "bold",
      color: appTheme.colors.text.onPrimary,
    },
    spinner: {
      color: appTheme.colors.text.onPrimary,
    },
    overlay: {
      padding: appTheme.spacing.lg,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "100%",
      backgroundColor: appTheme.colors.background.overlay,
      zIndex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    overlayMessageContainer: {
      padding: appTheme.spacing.md,
      width: "80%",
      borderRadius: appTheme.radius.lg,
      borderWidth: appTheme.sizes.borderRegular,
      borderColor: appTheme.colors.border.primary,
      backgroundColor: appTheme.colors.primary.strong,
      alignItems: "center",
      justifyContent: "center",
    },
  });
};

export const Theme = navigationTheme;

export default stylesFn;
