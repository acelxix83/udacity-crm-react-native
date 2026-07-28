import CustomerDetails from "@/src/features/components/Customer/components/Details";
import { SafeAreaView } from "react-native-safe-area-context";
import stylesFn from "../styles";

export default function CustomerDetailsScreen() {
  const styles = stylesFn();

  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomerDetails />
    </SafeAreaView>
  );
}
