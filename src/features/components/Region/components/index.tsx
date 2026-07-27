import { regions } from "@/src/constants/regions";
import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const RegionList = () => {
  const navigation = useNavigation<any>();

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
              navigation.navigate("RegionCustomers", {
                regionId: item.id.toString(),
              })
            }
          >
            <Text style={styles.text}>{item.label}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("NewCustomer")}
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
