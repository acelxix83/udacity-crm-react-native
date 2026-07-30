import { getAppTheme } from "@/src/theme";
import { StyleSheet } from "react-native";

const stylesFn = () => {
  const theme = getAppTheme();
  const errorColor = theme.colors.error.main;
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: theme.spacing.lg,
    },
    formContainer: {
      flex: 1,
      justifyContent: "space-between",
    },
    h1: {
      fontSize: theme.typography.title,
      fontWeight: "bold",
      color: theme.colors.text.default,
    },
    textInputPlaceholder: {
      color: theme.colors.text.placeholder,
    },
    textInput: {
      fontSize: theme.typography.bodySm,
      fontWeight: "bold",
      borderWidth: theme.sizes.borderRegular,
      borderColor: theme.colors.border.default,
      borderRadius: theme.radius.sm,
      padding: theme.spacing.md,
      backgroundColor: theme.colors.background.card,
      marginBottom: theme.spacing.lg,
      color: theme.colors.text.default,
    },
    errorInput: {
      borderColor: errorColor,
      borderWidth: theme.sizes.borderThick,
      backgroundColor: theme.colors.error.surface,
    },
    textArea: {
      height: theme.sizes.textAreaHeight,
    },
    text: {
      fontSize: theme.typography.bodySm,
      color: theme.colors.text.onPrimary,
      width: "65%",
    },
    inlineLabel: {
      marginBottom: theme.spacing.md,
    },
    toUpper: {
      textTransform: "uppercase",
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      gap: theme.spacing.lg,
    },
    errorText: {
      color: errorColor,
      fontSize: theme.typography.bodySm,
      marginTop: -theme.spacing.xl,
      marginBottom: theme.spacing.lgPlus,
      fontWeight: "bold",
    },
  });
};

export default stylesFn;
