import { StyleSheet } from "react-native";

const stylesFn = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      padding: 20,
    },
    h1: {
      fontSize: 28,
    },
    text: {
      fontSize: 23,
    },
    centeredText: {
      textAlign: "center",
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      gap: 11,
    },
    logoContainer: {
      justifyContent: "center",
    },
    logo: {
      width: "92%",
      aspectRatio: 3 / 2,
      alignSelf: "center",
    },
    logoText: {
      fontSize: 60,
      fontWeight: "bold",
      marginTop: 0,
      color: "#2a7ad6",
    },
  });
};

export default stylesFn;
