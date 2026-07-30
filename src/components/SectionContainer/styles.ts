import { getAppTheme } from "@/src/theme";
import { StyleSheet } from "react-native";

const stylesFn = () => {
  const theme = getAppTheme();

  return StyleSheet.create({
    container: {
      padding: theme.spacing.lg,
      borderWidth: theme.sizes.borderThick,
      borderColor: theme.colors.border.primary,
      borderRadius: theme.radius.xl,
      marginBottom: theme.spacing.lg,
      backgroundColor: theme.colors.primary.soft,
    },
    title: {
      fontSize: theme.typography.bodyLg,
      fontWeight: "bold",
      marginBottom: theme.spacing.md,
      color: theme.colors.text.default,
    },
  });
};

export default stylesFn;
