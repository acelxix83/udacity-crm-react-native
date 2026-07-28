import { useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSelector } from "react-redux";

import Button from "@/src/components/Button";
import DropdownComponent from "@/src/components/Dropdown";
import { boolOptions } from "@/src/constants/boolOptions";
import { regions } from "@/src/constants/regions";
import { LOADING } from "@/src/constants/status";
import { Customer, CustomerRequest } from "@/src/types";
import stylesFn from "./styles";

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
    cell: "",
    mobile: "",
    email: "",
    notes: "",
  };

  const styles = stylesFn();
  const [firstName, setFirstName] = useState(customer.firstName);
  const [lastName, setLastName] = useState(customer.lastName);
  const [isActive, setIsActive] = useState(
    customer.isActive ? "true" : "false",
  );
  const [regionId, setRegionId] = useState(customer.regionId);
  const [cell, setCell] = useState(customer.cell ?? "");
  const [mobile, setMobile] = useState(customer.mobile ?? "");
  const [email, setEmail] = useState(customer.email ?? "");
  const [notes, setNotes] = useState(customer.notes ?? "");

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

  const handleCellChange = (text: string) => {
    setCell(text);
  };

  const handleMobileChange = (text: string) => {
    setMobile(text);
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handleNotesChange = (text: string) => {
    setNotes(text);
  };

  const handleSubmitForm = () => {
    //TODO: add validation
    const customerData: Customer = {
      id: customerId,
      firstName,
      lastName,
      isActive: isActive === "true",
      regionId: regionId !== null ? regionId : null,
      cell,
      mobile,
      email,
      notes,
    };

    const originalRegion = customer.regionId;
    const customerRequest = { originalRegion, customer: customerData };
    handleSubmit(customerRequest);
  };

  return (
    <View style={styles.container}>
      {status === LOADING && (
        <View style={styles.savingOverlay}>
          <View style={styles.savingContainer}>
            <ActivityIndicator size="large" color={styles.h1.color} />
            <Text style={styles.h1}>Saving customer...</Text>
          </View>
        </View>
      )}

      <View style={styles.formContainer}>
        <ScrollView>
          <Text style={styles.sectionHeader}>Customer Information</Text>
          <View style={styles.customerContainer}>
            {isEditMode && (
              <View style={[styles.labelContainer, styles.inlineLabel]}>
                <Text style={[styles.label]}>Customer ID:</Text>
                <Text style={[styles.text, styles.toUpper]}>{customer.id}</Text>
              </View>
            )}
            <View style={styles.labelContainer}>
              <Text style={styles.label}>First Name:</Text>
              <TextInput
                style={styles.textInput}
                value={firstName}
                onChangeText={handleFirstNameChange}
                placeholder="First Name"
                placeholderTextColor={styles.textInputPlaceholder.color}
              />
            </View>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Last Name:</Text>
              <TextInput
                style={styles.textInput}
                value={lastName}
                onChangeText={handleLastNameChange}
                placeholder="Last Name"
                placeholderTextColor={styles.textInputPlaceholder.color}
              />
            </View>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Active:</Text>
              <DropdownComponent
                data={boolOptions}
                value={isActive}
                setValue={handleIsActiveChange}
              />
            </View>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Region:</Text>
              <DropdownComponent
                data={regions}
                value={regionId}
                setValue={handleRegionChange}
              />
            </View>
          </View>
          <Text style={styles.sectionHeader}>Contact Information</Text>
          <View style={styles.customerContainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Cell Number:</Text>
              <TextInput
                style={styles.textInput}
                value={cell}
                onChangeText={handleCellChange}
                placeholder="Cell Number"
                maxLength={10}
                placeholderTextColor={styles.textInputPlaceholder.color}
              />
            </View>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Mobile Number:</Text>
              <TextInput
                style={styles.textInput}
                value={mobile}
                onChangeText={handleMobileChange}
                placeholder="Mobile Number"
                maxLength={10}
                placeholderTextColor={styles.textInputPlaceholder.color}
              />
            </View>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Email:</Text>
              <TextInput
                style={styles.textInput}
                value={email}
                onChangeText={handleEmailChange}
                placeholder="Email"
                placeholderTextColor={styles.textInputPlaceholder.color}
              />
            </View>
          </View>
          <Text style={styles.sectionHeader}>Other</Text>
          <View style={styles.customerContainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Notes:</Text>
              <TextInput
                style={[styles.textInput, styles.textArea]}
                value={notes}
                onChangeText={handleNotesChange}
                placeholder="Notes"
                multiline={true}
                textAlignVertical="top"
                maxLength={200}
                placeholderTextColor={styles.textInputPlaceholder.color}
              />
            </View>
          </View>
        </ScrollView>
      </View>
      <Button onPress={handleSubmitForm} title="Save Customer" />
    </View>
  );
};

export default CustomerForm;
