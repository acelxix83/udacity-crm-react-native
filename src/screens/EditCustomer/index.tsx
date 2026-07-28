import CustomerEdit from "@/src/features/components/Customer/components/Edit";
import { SafeAreaView } from "react-native-safe-area-context";
import stylesFn from "../styles";

export default function EditCustomerScreen() {
  const styles = stylesFn();

  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomerEdit />
    </SafeAreaView>
  );
}
