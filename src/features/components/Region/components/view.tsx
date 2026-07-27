import { useNavigation, useRoute } from "@react-navigation/native";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import CustomerView from "../../Customer/components/view";

const Region = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const regionId = route.params?.regionId as string;
  const regionCustomerIds: string[] =
    useSelector(
      (state: any) =>
        state.region.list.regions[regionId as string]?.customerIds,
    ) ?? [];
  const hasCustomers = regionCustomerIds.length > 0;

  return (
    <View style={styles.container}>
      {!hasCustomers && (
        <Text style={styles.instructions}>No customers yet.</Text>
      )}
      <FlatList
        data={regionCustomerIds}
        keyExtractor={(customerId) => customerId}
        renderItem={({ item: customerId }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("EditCustomer", { customerId })}
          >
            <CustomerView
              customerId={customerId}
              regionId={regionId as string}
            />
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("NewCustomer", { regionId })}
      >
        <Text style={styles.text}>Create Customer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Region;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    color: "#eee",
  },
  instructions: {
    fontSize: 18,
    color: "#eee",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
});
