import { getAppTheme } from "@/src/theme";
import { StyleSheet } from "react-native";

const stylesFn = () => {
  const theme = getAppTheme();

  return StyleSheet.create({
    container: {
      marginBottom: theme.spacing.xxs,
      gap: theme.spacing.sm,
    },
    inlineContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    label: {
      fontSize: theme.typography.bodySm,
      fontWeight: "bold",
      color: theme.colors.text.onPrimary,
      textAlign: "left",
    },
  });
};

export default stylesFn;
