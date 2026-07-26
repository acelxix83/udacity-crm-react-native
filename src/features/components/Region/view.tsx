import { useLocalSearchParams, useRouter } from "expo-router";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import CustomerView from "../Customer/view";

const Region = () => {
  const { regionId } = useLocalSearchParams();
  const regionCustomerIds: string[] =
    useSelector(
      (state: any) =>
        state.region.list.regions[regionId as string]?.customerIds,
    ) ?? [];

  const router = useRouter();

  return (
    <View style={styles.container}>
      <FlatList
        data={regionCustomerIds}
        keyExtractor={(customerId) => customerId}
        renderItem={({ item: customerId }) => (
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: `/regions/editCustomer`,
                params: { customerId },
              })
            }
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
        onPress={() =>
          router.push(`/regions/newCustomer?regionId=${regionId as string}`)
        }
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
