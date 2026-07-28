import { StyleSheet } from "react-native";

const stylesFn = () => {
  return StyleSheet.create({
    text: {
      fontSize: 14,
      color: "#fff",
      width: "65%",
    },
    toUpper: {
      textTransform: "uppercase",
    },
  });
};

export default stylesFn;
