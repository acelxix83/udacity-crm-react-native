import { getAppTheme } from "@/src/theme";
import { StyleSheet } from "react-native";

const stylesFn = () => {
  const theme = getAppTheme();

  return StyleSheet.create({
    container: {
      marginTop: theme.spacing.xxs,
      marginBottom: 3,
    },
    dropdown: {
      height: theme.sizes.controlHeight,
      backgroundColor: theme.colors.background.card,
      borderColor: theme.colors.border.soft,
      borderWidth: theme.sizes.borderThin,
      borderRadius: theme.radius.md,
      paddingHorizontal: theme.spacing.sm,
      marginBottom: theme.spacing.lgPlus,
    },
    focusedDropdown: {
      borderWidth: theme.sizes.borderThick,
    },
    placeholderStyle: {
      fontSize: theme.typography.bodyMd,
      color: theme.colors.text.placeholder,
    },
    selectedTextStyle: {
      fontSize: theme.typography.bodyMd,
      fontWeight: "bold",
      color: theme.colors.text.default,
    },
    iconStyle: {
      width: theme.sizes.icon,
      height: theme.sizes.icon,
    },
    inputSearchStyle: {
      height: theme.sizes.searchInputHeight,
      fontSize: theme.typography.bodyMd,
    },
  });
};

export default stylesFn;
