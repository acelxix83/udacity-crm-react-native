import { getAppTheme, getNavigationTheme } from "@/src/theme";
import { StyleSheet } from "react-native";

const stylesFn = () => {
  const theme = getAppTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    h1: {
      fontSize: theme.typography.title,
      fontWeight: "bold",
      color: theme.colors.text.onPrimary,
    },
    spinner: {
      color: theme.colors.text.onPrimary,
    },
    overlay: {
      padding: theme.spacing.lg,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "100%",
      backgroundColor: theme.colors.background.overlay,
      zIndex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    overlayMessageContainer: {
      padding: theme.spacing.md,
      width: "80%",
      borderRadius: theme.radius.lg,
      borderWidth: theme.sizes.borderRegular,
      borderColor: theme.colors.border.primary,
      backgroundColor: theme.colors.primary.strong,
      alignItems: "center",
      justifyContent: "center",
    },
  });
};

export const Theme = getNavigationTheme("light");

export default stylesFn;
