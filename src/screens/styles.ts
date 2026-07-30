import { StyleSheet } from "react-native";
const stylesFn = () => {
  return StyleSheet.create({
    safeArea: {
      height: "100%",
      minWidth: "100%",
    },
    scrollViewContent: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });
};

export default stylesFn;
