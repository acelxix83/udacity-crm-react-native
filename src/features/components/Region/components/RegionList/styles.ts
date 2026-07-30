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
    },
  });

export default stylesFn;
