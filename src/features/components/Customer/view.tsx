import { Customer } from "@/src/types";
import { View, Text, StyleSheet } from "react-native";

const CustomerView = ({ customer }: { customer: Customer }) => {
  //TODO: get customer from redux using id from route params
  return (
    <View style={styles.customerContainer}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>ID:</Text>
        <Text style={styles.text}>{customer.id}</Text>
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>First Name:</Text>
        <Text style={styles.text}>{customer.firstName}</Text>
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Last Name:</Text>
        <Text style={styles.text}>{customer.lastName}</Text>
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Active:</Text>
        <Text style={styles.text}>{customer.isActive ? "Yes" : "No"}</Text>
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Region:</Text>
        <Text style={styles.text}>{customer.region}</Text>
      </View>
    </View>
  );
};

export default CustomerView;

const styles = StyleSheet.create({
  customerContainer: {
    padding: 20,
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 20,
    marginBottom: 20,
    backgroundColor: "#2a7ad6",
  },
  label: {
    fontSize: 14,
    color: "#eee",
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
    color: "#eee",
  },
  labelContainer: {
    marginBottom: 2,
    flexDirection: "row",
    gap: 8,
  },
});
