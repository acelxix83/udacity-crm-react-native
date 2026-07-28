import { StyleSheet } from "react-native";

const stylesFn = () => {
  return StyleSheet.create({
    container: {
      marginBottom: 2,
      gap: 8,
    },
    inlineContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    label: {
      fontSize: 14,
      fontWeight: "bold",
      color: "#fff",
      textAlign: "left",
    },
  });
};

export default stylesFn;
