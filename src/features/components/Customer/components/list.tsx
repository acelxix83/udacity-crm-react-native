import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

import CustomerView from "@/src/features/components/Customer/components/view";
import type { Customer, Region } from "@/src/types";

const CustomerList = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const regionId = route.params?.regionId as string;
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

  return (
    <ScrollView style={styles.customerContainer}>
      {customers.map((customer) => (
        <TouchableOpacity
          key={customer.id}
          onPress={() => {
            navigation.navigate("EditCustomer", {
              customerId: customer.id,
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
