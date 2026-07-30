import { getAppTheme } from "@/src/theme";
import { StyleSheet } from "react-native";

const stylesFn = ({
  width: screenWidth,
  height: screenHeight,
}: {
  width: number;
  height: number;
}) => {
  const theme = getAppTheme();
  const logoWidth = Math.min(screenWidth * 0.91, 700);
  const logoHeight = Math.min(screenHeight * 0.5, 600);

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      padding: theme.spacing.lg,
    },
    h1: {
      fontSize: theme.typography.hero,
      textAlign: "center",
      color: theme.colors.text.default,
    },
    text: {
      fontSize: theme.typography.section,
      padding: theme.spacing.md,
      color: theme.colors.text.default,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      gap: theme.spacing.md + 1,
    },
    logoContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    logo: {
      alignSelf: "center",
      width: logoWidth,
      height: logoHeight,
    },
  });
};

export default stylesFn;
