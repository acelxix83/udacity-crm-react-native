import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import CustomerView from "../Customer/new";

const Region = () => {
  const { regionId } = useLocalSearchParams();
  console.log("regionId", regionId);
  //TODO: get customers for the region from redux using regionId
  const router = useRouter();
  const customersForRegion = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      isActive: true,
      region: "South West",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      isActive: false,
      region: "North West",
    },
    {
      id: 3,
      firstName: "Alice",
      lastName: "Johnson",
      isActive: true,
      region: "South West",
    },
    {
      id: 4,
      firstName: "Bob",
      lastName: "Brown",
      isActive: true,
      region: "North West",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Regions</Text>
      <Text style={styles.instructions}>Select a region:</Text>
      <FlatList
        data={customersForRegion}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CustomerView></CustomerView>}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push(`/regions/newCustomer`)}
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
