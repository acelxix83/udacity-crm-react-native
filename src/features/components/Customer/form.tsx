import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";

import DropdownComponent from "@/src/components/dropdown";
import { boolOptions } from "@/src/constants/boolOptions";
import { regions } from "@/src/constants/regions";
import { Customer, CustomerRequest } from "@/src/types";

const CustomerForm = ({
  handleSubmit,
  status,
  customerId,
}: {
  handleSubmit: (customerRequest: CustomerRequest) => void;
  status: string;
  customerId: string | null;
}) => {
  const isEditMode = customerId !== null;
  //TODO: memoize this form
  const customer = useSelector(
    (state: any) => state.customer.list.customers[customerId as string],
  ) ?? {
    id: null,
    firstName: "",
    lastName: "",
    isActive: true,
    regionId: null,
  };

  const [firstName, setFirstName] = useState(customer.firstName);
  const [lastName, setLastName] = useState(customer.lastName);
  const [isActive, setIsActive] = useState(
    customer.isActive ? "true" : "false",
  );
  const [regionId, setRegionId] = useState(customer.regionId);

  const handleFirstNameChange = (text: string) => {
    setFirstName(text);
  };

  const handleLastNameChange = (text: string) => {
    setLastName(text);
  };

  const handleIsActiveChange = (value: string) => {
    setIsActive(value);
  };

  const handleRegionChange = (text: string) => {
    setRegionId(text !== "" ? text : null);
  };

  const handleSubmitForm = () => {
    //TODO: add validation
    const customerData: Customer = {
      id: customerId,
      firstName,
      lastName,
      isActive: isActive === "true",
      regionId: regionId !== null ? regionId : null,
    };

    const originalRegion = customer.regionId;
    const customerRequest = { originalRegion, customer: customerData };
    handleSubmit(customerRequest);
  };

  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <View style={styles.customerContainer}>
        {isEditMode && (
          <View
            style={[
              styles.labelContainer,
              { marginBottom: 10, justifyContent: "space-between" },
            ]}
          >
            <Text style={[styles.label, { width: "30%" }]}>Customer ID:</Text>
            <Text style={[styles.label, { width: "57%", textAlign: "left" }]}>
              {customer.id}
            </Text>
          </View>
        )}
        <View style={styles.labelContainer}>
          <Text style={styles.label}>First Name:</Text>
          <TextInput
            style={styles.textInput}
            value={firstName}
            onChangeText={handleFirstNameChange}
            placeholder="First Name"
          />
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Last Name:</Text>
          <TextInput
            style={styles.textInput}
            value={lastName}
            onChangeText={handleLastNameChange}
            placeholder="Last Name"
          />
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Active:</Text>
          <DropdownComponent
            data={boolOptions}
            value={isActive}
            setValue={handleIsActiveChange}
            label="Active"
          />
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Region:</Text>
          <DropdownComponent
            data={regions}
            value={regionId !== null ? String(regionId) : ""}
            setValue={handleRegionChange}
            label="Region"
          />
        </View>
      </View>
      <View style={{ padding: 20 }}>
        <TouchableOpacity style={styles.button} onPress={handleSubmitForm}>
          <Text style={styles.text}>Save Customer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomerForm;

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
