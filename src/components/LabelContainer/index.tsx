import React from "react";
import {
  DimensionValue,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

import stylesFn from "./styles";

const LabelContainer = ({
  label,
  children,
  isInline = true,
  labelWidth = "30%",
  containerStyle,
  labelStyle,
}: {
  label: string;
  children: React.ReactNode;
  isInline?: boolean;
  labelWidth?: DimensionValue;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}) => {
  const styles = stylesFn();

  return (
    <View
      style={[
        styles.container,
        isInline && styles.inlineContainer,
        containerStyle,
      ]}
    >
      <Text style={[styles.label, { width: labelWidth }, labelStyle]}>
        {label}
      </Text>
      {children}
    </View>
  );
};

export default LabelContainer;
