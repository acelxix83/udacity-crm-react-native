import { getAppTheme } from "@/src/theme";
import { StyleSheet } from "react-native";

const stylesFn = () => {
  const theme = getAppTheme();

  return StyleSheet.create({
    customerDetailsContainer: {
      padding: theme.spacing.lg,
      justifyContent: "space-between",
      height: "100%",
    },
    text: {
      fontSize: theme.typography.bodySm,
      color: theme.colors.text.onPrimary,
      width: "65%",
    },
    instructions: {
      fontSize: theme.typography.bodyMd,
      marginTop: theme.spacing.smPlus,
      marginBottom: theme.spacing.md,
      color: theme.colors.text.default,
    },
  });
};

export default stylesFn;
