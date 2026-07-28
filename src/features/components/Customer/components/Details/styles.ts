import { StyleSheet } from "react-native";

const stylesFn = () => {
  return StyleSheet.create({
    customerDetailsContainer: {
      padding: 20,
      justifyContent: "space-between",
      height: "100%",
    },
    text: {
      fontSize: 14,
      color: "#fff",
      width: "65%",
    },
    contentContainer: {
      paddingBottom: 20,
    },
  });
};

export default stylesFn;
