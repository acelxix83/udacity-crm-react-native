import { regions } from "@/src/constants/regions";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

const CustomerDetails = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const customerId = route.params?.customerId as string;

  const customer = useSelector(
    (state: any) => state.customer.list.customers[customerId as string],
  );

  const getRegionLabel = (regionId: string | null) => {
    if (!regionId) return "N/A";
    const region = regions.find((region) => region.value === regionId);
    return region ? region.label : "N/A";
  };

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
        <Text style={styles.text}>{getRegionLabel(customer.regionId)}</Text>
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Additional Details:</Text>
        <Text style={styles.text}>N/A</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("EditCustomer")}
      >
        <Text style={styles.text}>Edit Customer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomerDetails;

const styles = StyleSheet.create({
  customerContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    color: "#000",
  },
  instructions: {
    fontSize: 18,
    color: "#000",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  labelContainer: {
    marginBottom: 2,
    flexDirection: "row",
    gap: 8,
  },
  label: {
    fontSize: 14,
    color: "#000",
    fontWeight: "bold",
  },
});
