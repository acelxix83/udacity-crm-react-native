import { appTheme } from "@/src/theme";
import { StyleSheet } from "react-native";

const stylesFn = () => {
  return StyleSheet.create({
    text: {
      fontSize: appTheme.typography.bodySm,
      color: appTheme.colors.text.onPrimary,
      width: "65%",
    },
    toUpper: {
      textTransform: "uppercase",
    },
  });
};

export default stylesFn;
