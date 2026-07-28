import { StyleSheet } from "react-native";

const stylesFn = () => {
  return StyleSheet.create({
    container: {
      padding: 20,
      borderWidth: 2,
      borderColor: "#ccc",
      borderRadius: 20,
      marginBottom: 20,
      backgroundColor: "#2a7ad6",
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    },
  });
};

export default stylesFn;
