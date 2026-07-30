import { appTheme } from "@/src/theme";
import { StyleSheet } from "react-native";

const stylesFn = () => {
  return StyleSheet.create({
    container: {
      marginBottom: appTheme.spacing.xxs,
      gap: appTheme.spacing.sm,
    },
    inlineContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    label: {
      fontSize: appTheme.typography.bodySm,
      fontWeight: "bold",
      color: appTheme.colors.text.onPrimary,
      textAlign: "left",
    },
  });
};

export default stylesFn;
