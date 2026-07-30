import { getAppTheme } from "@/src/theme";
import { StyleSheet } from "react-native";

const stylesFn = () =>
  StyleSheet.create(
    (() => {
      const theme = getAppTheme();

      return {
        container: {
          flex: 1,
          justifyContent: "center",
          padding: theme.spacing.lg,
        },
        instructions: {
          fontSize: theme.typography.section,
          color: theme.colors.text.default,
        },
      };
    })(),
  );

export default stylesFn;
