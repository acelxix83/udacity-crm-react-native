import { appTheme } from "@/src/theme";
import { StyleSheet } from "react-native";

const stylesFn = () => {
  return StyleSheet.create({
    container: {
      padding: appTheme.spacing.lg,
      borderWidth: appTheme.sizes.borderThick,
      borderColor: appTheme.colors.border.primary,
      borderRadius: appTheme.radius.xl,
      marginBottom: appTheme.spacing.lg,
      backgroundColor: appTheme.colors.primary.soft,
    },
    title: {
      fontSize: appTheme.typography.bodyLg,
      fontWeight: "bold",
      marginBottom: appTheme.spacing.md,
    },
  });
};

export default stylesFn;
