import { getAppTheme } from "@/src/theme";
import { StyleSheet } from "react-native";

const stylesFn = () => {
  const theme = getAppTheme();

  return StyleSheet.create({
    text: {
      fontSize: theme.typography.bodySm,
      color: theme.colors.text.onPrimary,
      width: "65%",
    },
    toUpper: {
      textTransform: "uppercase",
    },
  });
};

export default stylesFn;
