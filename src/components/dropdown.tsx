import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

/**
 * Component for rendering a dropdown menu with search functionality.
 * Based on sample from https://www.npmjs.com/package/react-native-element-dropdown
 * @param param0 - The props for the DropdownComponent.
 * @param param0.data - An array of objects representing the dropdown options, each with a label and value.
 * @param param0.value - The currently selected value in the dropdown.
 * @param param0.setValue - A function to update the selected value when an option is chosen.
 * @returns A React element representing the dropdown component.
 */
const DropdownComponent = ({
  data,
  value,
  setValue,
  label = "Dropdown label",
}: {
  data: { label: string; value: string }[];
  value: string;
  setValue: (value: string) => void;
  label?: string;
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>
          {label}
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        // search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select item" : "..."}
        // searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
        //   renderLeftIcon={() => (
        //     <AntDesign
        //       style={styles.icon}
        //       color={isFocus ? 'blue' : 'black'}
        //       name="Safety"
        //       size={20}
        //     />
        //   )}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
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
