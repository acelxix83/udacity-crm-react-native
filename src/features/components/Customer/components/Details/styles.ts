import { appTheme } from "@/src/theme";
import { StyleSheet } from "react-native";

const stylesFn = () => {
  return StyleSheet.create({
    customerDetailsContainer: {
      padding: appTheme.spacing.lg,
      justifyContent: "space-between",
      height: "100%",
    },
    text: {
      fontSize: appTheme.typography.bodySm,
      color: appTheme.colors.text.onPrimary,
      width: "65%",
    },
    instructions: {
      fontSize: appTheme.typography.bodyMd,
      marginTop: appTheme.spacing.smPlus,
      marginBottom: appTheme.spacing.md,
    },
  });
};

export default stylesFn;
