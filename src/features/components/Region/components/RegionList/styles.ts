import { StyleSheet } from "react-native";

const stylesFn = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      padding: 20,
    },
    text: {
      fontSize: 24,
      textAlign: "center",
    },
    instructions: {
      fontSize: 20,
    },
  });

export default stylesFn;
