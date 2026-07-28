import { StyleSheet } from "react-native";

const stylesFn = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      paddingTop: 0,
    },
    formContainer: {
      flex: 1,
      justifyContent: "space-between",
    },
    savingOverlay: {
      padding: 20,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "100%",
      backgroundColor: "#00000086",
      zIndex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    savingContainer: {
      padding: 10,
      width: "80%",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#2a7ad6",
      backgroundColor: "#2a7ad6e8",
      alignItems: "center",
      justifyContent: "center",
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
    textArea: {
      height: 120,
    },
    label: {
      fontSize: 14,
      fontWeight: "bold",
      width: "40%",
      color: "#fff",
    },
    text: {
      fontSize: 14,
      color: "#fff",
      width: "65%",
    },
    labelContainer: {
      justifyContent: "space-between",
      marginTop: 0,
      marginBottom: 0,
      gap: 8,
    },
    inlineLabel: {
      marginBottom: 10,
      justifyContent: "space-between",
      flexDirection: "row",
    },
    toUpper: {
      textTransform: "uppercase",
    },
  });
};

export default stylesFn;
