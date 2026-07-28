import { StyleSheet } from "react-native";

const stylesFn = () => {
  return StyleSheet.create({
    customerContainer: {
      padding: 20,
      borderWidth: 2,
      borderColor: "#ccc",
      borderRadius: 20,
      marginBottom: 20,
      backgroundColor: "#2a7ad6",
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
    toUpper: {
      textTransform: "uppercase",
    },
  });
};

export default stylesFn;
