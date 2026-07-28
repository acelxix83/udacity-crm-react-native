import { Text, TouchableOpacity } from "react-native";
import stylesFn from "./styles";

const Button = ({ onPress, title }: { onPress: () => void; title: string }) => {
  const styles = stylesFn();

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
