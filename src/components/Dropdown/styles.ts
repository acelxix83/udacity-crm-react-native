import { appTheme } from "@/src/theme";
import { StyleSheet } from "react-native";

const stylesFn = () => {
  return StyleSheet.create({
    container: {
      // backgroundColor: "white",
      marginTop: appTheme.spacing.xxs,
      marginBottom: 3,
    },
    dropdown: {
      height: appTheme.sizes.controlHeight,
      backgroundColor: appTheme.colors.background.card,
      borderColor: appTheme.colors.border.soft,
      borderWidth: appTheme.sizes.borderThin,
      borderRadius: appTheme.radius.md,
      paddingHorizontal: appTheme.spacing.sm,
      marginBottom: appTheme.spacing.smPlus,
    },
    focusedDropdown: {
      borderColor: appTheme.colors.border.focus,
    },
    placeholderStyle: {
      fontSize: appTheme.typography.bodyMd,
    },
    selectedTextStyle: {
      fontSize: appTheme.typography.bodyMd,
      fontWeight: "bold",
    },
    iconStyle: {
      width: appTheme.sizes.icon,
      height: appTheme.sizes.icon,
    },
    inputSearchStyle: {
      height: appTheme.sizes.searchInputHeight,
      fontSize: appTheme.typography.bodyMd,
    },
  });
};

export default stylesFn;
