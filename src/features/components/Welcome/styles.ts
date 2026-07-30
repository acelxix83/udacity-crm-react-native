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
      padding: 20,
    },
    h1: {
      fontSize: 28,
      textAlign: "center",
    },
    text: {
      fontSize: 23,
      padding: 10,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      gap: 11,
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
