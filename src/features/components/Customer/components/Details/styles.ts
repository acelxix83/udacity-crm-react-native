import { StyleSheet } from "react-native";

const stylesFn = () => {
  return StyleSheet.create({
    customerDetailsContainer: {
      padding: 20,
      justifyContent: "space-between",
      height: "100%",
    },
    label: {
      fontSize: 14,
      fontWeight: "bold",
      width: "30%",
      color: "#fff",
      textAlign: "left",
    },
    text: {
      fontSize: 14,
      color: "#fff",
      width: "65%",
    },
    labelContainer: {
      marginBottom: 2,
      flexDirection: "row",
      gap: 8,
      justifyContent: "space-between",
    },
  });
};

export default stylesFn;
