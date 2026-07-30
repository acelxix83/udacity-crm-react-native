import { getAppTheme } from "@/src/theme";
import { StyleSheet } from "react-native";

const stylesFn = ({ flex }: { flex?: number }) => {
  const theme = getAppTheme();

  return StyleSheet.create({
    button: {
      backgroundColor: theme.colors.primary.main,
      padding: theme.spacing.md,
      borderRadius: theme.radius.md,
      alignItems: "center",
      marginTop: theme.spacing.lg,
      ...(flex !== undefined ? { flex } : {}),
    },
    text: {
      fontSize: theme.typography.title,
      textAlign: "center",
      color: theme.colors.text.onPrimary,
    },
  });
};

export default stylesFn;
