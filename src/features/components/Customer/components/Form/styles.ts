import { appTheme } from "@/src/theme";
import { StyleSheet } from "react-native";

const stylesFn = () => {
  const errorColor = appTheme.colors.error.main;
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: appTheme.spacing.lg,
    },
    formContainer: {
      flex: 1,
      justifyContent: "space-between",
    },
    h1: {
      fontSize: appTheme.typography.title,
      fontWeight: "bold",
      color: appTheme.colors.text.onPrimary,
    },
    textInputPlaceholder: {
      color: appTheme.colors.text.placeholder,
    },
    textInput: {
      fontSize: appTheme.typography.bodySm,
      fontWeight: "bold",
      borderWidth: appTheme.sizes.borderRegular,
      borderColor: appTheme.colors.border.default,
      borderRadius: appTheme.radius.sm,
      padding: appTheme.spacing.md,
      backgroundColor: appTheme.colors.background.card,
      marginBottom: appTheme.spacing.lg,
    },
    errorInput: {
      borderColor: errorColor,
      borderWidth: appTheme.sizes.borderThick,
      backgroundColor: appTheme.colors.error.surface,
    },
    textArea: {
      height: appTheme.sizes.textAreaHeight,
    },
    text: {
      fontSize: appTheme.typography.bodySm,
      color: appTheme.colors.text.onPrimary,
      width: "65%",
    },
    inlineLabel: {
      marginBottom: appTheme.spacing.md,
    },
    toUpper: {
      textTransform: "uppercase",
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      gap: appTheme.spacing.lg,
    },
    errorText: {
      color: errorColor,
      fontSize: appTheme.typography.bodySm,
      marginTop: -appTheme.spacing.xl,
      marginBottom: appTheme.spacing.lgPlus,
      fontWeight: "bold",
    },
  });
};

export default stylesFn;
