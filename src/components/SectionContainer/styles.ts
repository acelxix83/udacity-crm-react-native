import { StyleSheet } from "react-native";

const stylesFn = () => {
  return StyleSheet.create({
    container: {
      padding: 20,
      borderWidth: 2,
      borderColor: "#2a7ad6",
      borderRadius: 20,
      marginBottom: 20,
      backgroundColor: "#5996db",
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    },
  });
};

export default stylesFn;
