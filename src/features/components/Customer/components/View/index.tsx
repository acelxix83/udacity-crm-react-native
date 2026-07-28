import { regions } from "@/src/constants/regions";
import { Customer } from "@/src/types";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import stylesFn from "./styles";

const CustomerView = ({
  customerId,
  regionId,
}: {
  customerId: string;
  regionId: string | null;
}) => {
  const styles = stylesFn();
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
        <Text style={[styles.text, styles.toUpper]}>{customer.id}</Text>
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>First Name:</Text>
        <Text style={[styles.text, styles.toUpper]}>{customer.firstName}</Text>
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Last Name:</Text>
        <Text style={[styles.text, styles.toUpper]}>{customer.lastName}</Text>
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Active:</Text>
        <Text style={[styles.text, styles.toUpper]}>
          {customer.isActive ? "Yes" : "No"}
        </Text>
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Region:</Text>
        <Text style={[styles.text, styles.toUpper]}>
          {getRegionLabel(regionId)}
        </Text>
      </View>
    </View>
  );
};

export default CustomerView;
