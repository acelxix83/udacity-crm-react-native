import { Customer } from "@/src/types";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
// import { useLocalSearchParams } from "expo-router";

const NewCustomer = () => {
  //TODO: get customer from redux using id from route params
  //   const { id } = useLocalSearchParams();
  const customer: Customer = {
    id: 1,
    firstName: "",
    lastName: "",
    isActive: true,
    region: null,
  };
  //TODO: get customer from redux using id from route params
  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <View style={styles.customerContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>First Name:</Text>
          <TextInput
            style={styles.textInput}
            value={customer.firstName}
            placeholder="First Name"
          />
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Last Name:</Text>
          <TextInput
            style={styles.textInput}
            value={customer.lastName}
            placeholder="Last Name"
          />
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Active:</Text>
          <TextInput
            style={styles.textInput}
            value={customer.isActive ? "Yes" : "No"}
            placeholder="Active"
          />
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Region:</Text>
          <TextInput
            style={styles.textInput}
            value={customer.region !== null ? String(customer.region) : ""}
            placeholder="Region"
          />
        </View>
      </View>
      <View style={{ padding: 20 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("Button Pressed!")}
        >
          <Text style={styles.text}>Save Customer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewCustomer;

const styles = StyleSheet.create({
  textInput: {
    fontSize: 14,
    color: "#000",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    margin: 5,
    backgroundColor: "#fff",
  },
  customerContainer: {
    padding: 20,
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 20,
    margin: 20,
    backgroundColor: "#2a7ad6",
  },
  label: {
    fontSize: 14,
    color: "#eee",
    fontWeight: "bold",
    width: "30%",
  },
  text: {
    fontSize: 14,
    color: "#eee",
  },
  labelContainer: {
    justifyContent: "space-between",
    marginBottom: 2,
    flexDirection: "row",
    gap: 8,
  },
  button: {
    backgroundColor: "#2a7ad6",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
});
