import { StyleSheet } from "react-native";

const stylesFn = ({ flex }: { flex?: number }) =>
  StyleSheet.create({
    button: {
      backgroundColor: "#2a7ad6",
      padding: 10,
      borderRadius: 8,
      alignItems: "center",
      marginTop: 20,
      ...(flex !== undefined ? { flex } : {}),
    },
    text: {
      fontSize: 24,
      textAlign: "center",
      color: "#fff",
    },
  });

export default stylesFn;
