import { appTheme } from "@/src/theme";
import { StyleSheet } from "react-native";

const stylesFn = ({
  width: screenWidth,
  height: screenHeight,
}: {
  width: number;
  height: number;
}) => {
  const logoWidth = Math.min(screenWidth * 0.91, 700);
  const logoHeight = Math.min(screenHeight * 0.5, 600);

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      padding: appTheme.spacing.lg,
    },
    h1: {
      fontSize: appTheme.typography.hero,
      textAlign: "center",
    },
    text: {
      fontSize: appTheme.typography.section,
      padding: appTheme.spacing.md,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      gap: appTheme.spacing.md + 1,
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
