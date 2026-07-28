import RegionList from "@/src/features/components/Region/components/RegionList";
import { SafeAreaView } from "react-native-safe-area-context";
import stylesFn from "../styles";

export default function RegionListScreen() {
  const styles = stylesFn();

  return (
    <SafeAreaView style={styles.safeArea}>
      <RegionList />
    </SafeAreaView>
  );
}
