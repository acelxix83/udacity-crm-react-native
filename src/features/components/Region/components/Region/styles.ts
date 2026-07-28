import { StyleSheet } from "react-native";

const stylesFn = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      padding: 20,
    },
    instructions: {
      fontSize: 18,
      marginTop: 20,
    },
    h1: {
      fontSize: 24,
      fontWeight: "bold",
    },
    h2: {
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 10,
    },
  });

export default stylesFn;
