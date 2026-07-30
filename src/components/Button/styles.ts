import { appTheme } from "@/src/theme";
import { StyleSheet } from "react-native";

const stylesFn = ({ flex }: { flex?: number }) =>
  StyleSheet.create({
    button: {
      backgroundColor: appTheme.colors.primary.main,
      padding: appTheme.spacing.md,
      borderRadius: appTheme.radius.md,
      alignItems: "center",
      marginTop: appTheme.spacing.lg,
      ...(flex !== undefined ? { flex } : {}),
    },
    text: {
      fontSize: appTheme.typography.title,
      textAlign: "center",
      color: appTheme.colors.text.onPrimary,
    },
  });

export default stylesFn;
