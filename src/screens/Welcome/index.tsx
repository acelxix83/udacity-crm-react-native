import Welcome from "@/src/features/components/Welcome";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import stylesFn from "../styles";

export default function HomeScreen() {
  const styles = stylesFn();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Welcome />
      </ScrollView>
    </SafeAreaView>
  );
}
