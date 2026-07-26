import type { Customer, Region } from "@/src/types";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import CustomerView from "./view";

const CustomerList = () => {
  const { regionId } = useLocalSearchParams();
  const region = useSelector((state: any) =>
    state.region.list.regions.find((region: Region) => region.id === regionId),
  );
  const allCustomers = useSelector(
    (state: any) => state.customer.list.customers,
  );

  const customers: Customer[] = region
    ? region.customerIds.map((customerId: string) =>
        allCustomers.find((customer: Customer) => customer.id === customerId),
      )
    : [];
  const router = useRouter();

  return (
    <ScrollView style={styles.customerContainer}>
      {customers.map((customer) => (
        <TouchableOpacity
          key={customer.id}
          onPress={() => {
            router.push({
              pathname: `/regions/editCustomer`,
              params: { id: customer.id },
            });
          }}
        >
          <CustomerView
            key={customer.id}
            customerId={customer.id as string}
            regionId={regionId as string}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CustomerList;

const styles = StyleSheet.create({
  customerContainer: {
    flex: 1,
    padding: 20,
    height: "90%",
  },
});
