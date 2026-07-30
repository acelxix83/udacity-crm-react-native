import { memo, useEffect, useMemo, useState } from "react";
import { View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

import stylesFn from "./styles";

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
  initialValue,
  onChangeValue,
}: {
  data: { label: string; value: string }[];
  initialValue?: string | null;
  onChangeValue: (value: string) => void;
  label?: string;
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(
    initialValue ?? null,
  );
  const styles = useMemo(() => stylesFn(), []);

  useEffect(() => {
    setSelectedValue(initialValue ?? null);
  }, [initialValue]);

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && styles.focusedDropdown]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select item" : "..."}
        value={selectedValue}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setSelectedValue(item.value);
          onChangeValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default memo(DropdownComponent);
