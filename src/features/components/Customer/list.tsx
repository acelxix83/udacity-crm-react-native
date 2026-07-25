import CustomerView from "./view";
import type { Customer } from "@/src/types";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const CustomerList = () => {
  const router = useRouter();
  //TODO: get customers from redux
  const customers: Customer[] = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      isActive: true,
      region: 1,
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      isActive: false,
      region: 2,
    },
    {
      id: 3,
      firstName: "Alice",
      lastName: "Johnson",
      isActive: true,
      region: 1,
    },
    {
      id: 4,
      firstName: "Bob",
      lastName: "Brown",
      isActive: false,
      region: 2,
    },
    {
      id: 5,
      firstName: "Charlie",
      lastName: "Davis",
      isActive: true,
      region: 3,
    },
  ];

  return (
    <ScrollView style={styles.customerContainer}>
      {customers.map((customer) => (
        <TouchableOpacity
          key={customer.id}
          onPress={() => {
            router.push({
              pathname: `/regions/editCustomer`,
              params: { id: customer.id?.toString() },
            });
          }}
        >
          <CustomerView key={customer.id} customer={customer} />
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
