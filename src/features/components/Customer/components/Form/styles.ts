import { StyleSheet } from "react-native";

const stylesFn = () => {
  const errorColor = "#c91111";
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    formContainer: {
      flex: 1,
      justifyContent: "space-between",
    },
    h1: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#fff",
    },
    textInputPlaceholder: {
      color: "#bbb",
    },
    textInput: {
      fontSize: 14,
      fontWeight: "bold",
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      padding: 10,
      backgroundColor: "#fff",
      marginBottom: 20,
    },
    errorInput: {
      borderColor: errorColor,
      borderWidth: 2,
      backgroundColor: "#fff4f4",
    },
    textArea: {
      height: 120,
    },
    text: {
      fontSize: 14,
      color: "#fff",
      width: "65%",
    },
    inlineLabel: {
      marginBottom: 10,
    },
    toUpper: {
      textTransform: "uppercase",
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      gap: 20,
    },
    errorText: {
      color: errorColor,
      fontSize: 15,
      marginTop: -25,
      marginBottom: 15,
      fontWeight: "bold",
    },
  });
};

export default stylesFn;
