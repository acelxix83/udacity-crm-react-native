import { StyleSheet } from "react-native";

const stylesFn = () => {
  return StyleSheet.create({
    container: {
      // backgroundColor: "white",
      marginTop: 2,
      marginBottom: 3,
    },
    dropdown: {
      height: 50,
      backgroundColor: "white",
      borderColor: "gray",
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      marginBottom: 5,
    },
    focusedDropdown: {
      borderColor: "blue",
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
      fontWeight: "bold",
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });
};

export default stylesFn;
