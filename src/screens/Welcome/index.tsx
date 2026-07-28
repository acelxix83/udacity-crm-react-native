import Welcome from "@/src/features/components/Welcome";
import { SafeAreaView } from "react-native-safe-area-context";
import stylesFn from "../styles";

export default function HomeScreen() {
  const styles = stylesFn();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Welcome />
    </SafeAreaView>
  );
}
