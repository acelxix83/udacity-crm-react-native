import { appTheme } from "@/src/theme";
import { StyleSheet } from "react-native";

const stylesFn = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      padding: appTheme.spacing.lg,
    },
    instructions: {
      fontSize: appTheme.typography.section,
      marginTop: appTheme.spacing.lg,
      marginBottom: appTheme.spacing.lg,
    },
    h1: {
      fontSize: appTheme.typography.title,
      fontWeight: "bold",
    },
    h2: {
      fontSize: appTheme.typography.bodyLg,
      fontWeight: "bold",
      marginTop: appTheme.spacing.md,
    },
  });

export default stylesFn;
