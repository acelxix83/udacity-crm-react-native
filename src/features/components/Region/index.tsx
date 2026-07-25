import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

const RegionList = () => {
  const router = useRouter();
  const regions = [
    { id: 1, name: "South West" },
    { id: 2, name: "North West" },
    { id: 3, name: "South East" },
    { id: 4, name: "North East" },
    { id: 5, name: "Mid East" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Regions</Text>
      <Text style={styles.instructions}>Select a region:</Text>
      <FlatList
        data={regions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              router.push({
                pathname: `/regions/customerList`,
                params: { regionId: item.id.toString() },
              })
            }
          >
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
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

export default RegionList;

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
