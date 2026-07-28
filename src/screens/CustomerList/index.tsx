import Region from "@/src/features/components/Region/components/Region";
import { SafeAreaView } from "react-native-safe-area-context";
import stylesFn from "../styles";

export default function CustomerListScreen() {
  const styles = stylesFn();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Region />
    </SafeAreaView>
  );
}
