import { Text, TouchableOpacity } from "react-native";
import stylesFn from "./styles";

const Button = ({
  onPress,
  title,
  flex,
}: {
  onPress: (e: any) => void;
  title: string;
  flex?: number;
}) => {
  const styles = stylesFn({ flex });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
