import React from "react";
import { Text, View } from "react-native";

import stylesFn from "./styles";

const SectionContainer = ({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => {
  const styles = stylesFn();
  return (
    <>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={styles.container}>{children}</View>
    </>
  );
};

export default SectionContainer;
