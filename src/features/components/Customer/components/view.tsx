import { regions } from "@/src/constants/regions";
import { Customer } from "@/src/types";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const CustomerView = ({
  customerId,
  regionId,
}: {
  customerId: string;
  regionId: string | null;
}) => {
  const customer: Customer = useSelector(
    (state: any) => state.customer.list.customers[customerId],
  );

  if (!customer) {
    return null;
  }

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
        <Text style={styles.text}>{getRegionLabel(regionId)}</Text>
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
    color: "#000",
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
    color: "#000",
  },
  labelContainer: {
    marginBottom: 2,
    flexDirection: "row",
    gap: 8,
  },
});
