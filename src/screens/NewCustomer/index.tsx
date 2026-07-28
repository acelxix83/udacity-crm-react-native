import NewCustomer from "@/src/features/components/Customer/components/New";
import { SafeAreaView } from "react-native-safe-area-context";
import stylesFn from "../styles";

export default function NewCustomerScreen() {
  const styles = stylesFn();

  return (
    <SafeAreaView style={styles.safeArea}>
      <NewCustomer />
    </SafeAreaView>
  );
}
