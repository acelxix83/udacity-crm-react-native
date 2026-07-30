import { getAppTheme } from "@/src/theme";
import { StyleSheet } from "react-native";

const stylesFn = () => {
  const theme = getAppTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      padding: theme.spacing.lg,
    },
    instructions: {
      fontSize: theme.typography.section,
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.lg,
      color: theme.colors.text.default,
    },
    h1: {
      fontSize: theme.typography.title,
      fontWeight: "bold",
      color: theme.colors.text.default,
    },
    h2: {
      fontSize: theme.typography.bodyLg,
      fontWeight: "bold",
      marginTop: theme.spacing.md,
      color: theme.colors.text.default,
    },
  });
};

export default stylesFn;
