import { useNavigation, useRoute } from "@react-navigation/native";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
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
import LabelContainer from "@/src/components/LabelContainer";
import SectionContainer from "@/src/components/SectionContainer";
import { boolOptions } from "@/src/constants/boolOptions";
import { regions } from "@/src/constants/regions";
import { IDLE, LOADING } from "@/src/constants/status";
import { Customer, CustomerRequest } from "@/src/types";
import stylesFn from "./styles";

const DEFAULT_CUSTOMER = {
  id: null,
  firstName: "",
  lastName: "",
  isActive: true,
  regionId: null,
  home: "",
  mobile: "",
  email: "",
  notes: "",
};

const CustomerForm = ({
  handleSubmit,
  status,
  customerId,
}: {
  handleSubmit: (customerRequest: CustomerRequest) => void;
  status: string;
  customerId: string | null;
}) => {
  const route = useRoute<any>();
  const currentRegionId = route.params?.regionId as string;
  const navigation = useNavigation<any>();
  const isEditMode = customerId !== null;

  const customer =
    useSelector(
      (state: any) => state.customer.list.customers[customerId as string],
    ) ?? DEFAULT_CUSTOMER;

  const styles = useMemo(() => stylesFn(), []);
  const initialFormValues = useMemo(
    () => ({
      firstName: customer.firstName ?? "",
      lastName: customer.lastName ?? "",
      isActive: customer.isActive ? "true" : "false",
      regionId: customer.regionId ?? currentRegionId ?? null,
      home: customer.home ?? "",
      mobile: customer.mobile ?? "",
      email: customer.email ?? "",
      notes: customer.notes ?? "",
    }),
    [customer, currentRegionId],
  );
  const formValuesRef = useRef(initialFormValues);

  const [submitClicked, setSubmitClicked] = useState(false);
  const [requestLoading, setRequestLoading] = useState(false);

  useEffect(() => {
    formValuesRef.current = initialFormValues;
  }, [initialFormValues]);

  const handleFirstNameChange = useCallback((text: string) => {
    formValuesRef.current.firstName = text;
  }, []);

  const handleLastNameChange = useCallback((text: string) => {
    formValuesRef.current.lastName = text;
  }, []);

  const handleIsActiveChange = useCallback((value: string) => {
    formValuesRef.current.isActive = value;
  }, []);

  const handleRegionChange = useCallback((text: string) => {
    const nextRegionId = text !== "" ? text : null;
    formValuesRef.current.regionId = nextRegionId;
  }, []);

  const handleHomeChange = useCallback((text: string) => {
    formValuesRef.current.home = text;
  }, []);

  const handleMobileChange = useCallback((text: string) => {
    formValuesRef.current.mobile = text;
  }, []);

  const handleEmailChange = useCallback((text: string) => {
    formValuesRef.current.email = text;
  }, []);

  const handleNotesChange = useCallback((text: string) => {
    formValuesRef.current.notes = text;
  }, []);

  const handleSubmitForm = () => {
    //TODO: add validation
    const formValues = formValuesRef.current;
    const customerData: Customer = {
      id: customerId,
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      isActive: formValues.isActive === "true",
      regionId: formValues.regionId,
      home: formValues.home,
      mobile: formValues.mobile,
      email: formValues.email,
      notes: formValues.notes,
    };

    const originalRegion = customer.regionId;
    const customerRequest = { originalRegion, customer: customerData };
    setSubmitClicked(true);
    handleSubmit(customerRequest);
  };

  const handleCancel = () => {
    //TODO: add confirmation if form is dirty
    navigation.goBack();
  };

  /**
   * Handle navigation back to the previous screen after the request is completed.
   * This effect runs whenever the status, navigation, submitClicked, or requestLoading changes.
   * If the submit button has not been clicked, it does nothing.
   */
  useEffect(() => {
    if (!submitClicked) {
      return;
    }
    if (status === LOADING) {
      setRequestLoading(true);
      return;
    }
    if (requestLoading && status === IDLE) {
      setRequestLoading(false);
      setSubmitClicked(false);
      navigation.goBack();
    }
  }, [status, navigation, submitClicked, requestLoading]);

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
          <SectionContainer title="Customer Information">
            {isEditMode && (
              <LabelContainer
                label="Customer ID:"
                isInline={true}
                labelWidth="40%"
                containerStyle={styles.inlineLabel}
              >
                <Text style={[styles.text, styles.toUpper]}>{customer.id}</Text>
              </LabelContainer>
            )}
            <LabelContainer
              label="First Name:"
              isInline={false}
              labelWidth="40%"
            >
              <TextInput
                style={styles.textInput}
                defaultValue={initialFormValues.firstName}
                onChangeText={handleFirstNameChange}
                placeholder="First Name"
                placeholderTextColor={styles.textInputPlaceholder.color}
              />
            </LabelContainer>
            <LabelContainer
              label="Last Name:"
              isInline={false}
              labelWidth="40%"
            >
              <TextInput
                style={styles.textInput}
                defaultValue={initialFormValues.lastName}
                onChangeText={handleLastNameChange}
                placeholder="Last Name"
                placeholderTextColor={styles.textInputPlaceholder.color}
              />
            </LabelContainer>
            <LabelContainer label="Active:" isInline={false} labelWidth="40%">
              <DropdownComponent
                data={boolOptions}
                initialValue={initialFormValues.isActive}
                onChangeValue={handleIsActiveChange}
              />
            </LabelContainer>
            <LabelContainer label="Region:" isInline={false} labelWidth="40%">
              <DropdownComponent
                data={regions}
                initialValue={initialFormValues.regionId}
                onChangeValue={handleRegionChange}
              />
            </LabelContainer>
          </SectionContainer>
          <SectionContainer title="Contact Information">
            <LabelContainer
              label="Mobile Number:"
              isInline={false}
              labelWidth="40%"
            >
              <TextInput
                style={styles.textInput}
                defaultValue={initialFormValues.mobile}
                onChangeText={handleMobileChange}
                placeholder="Mobile Number"
                maxLength={10}
                placeholderTextColor={styles.textInputPlaceholder.color}
              />
            </LabelContainer>
            <LabelContainer
              label="Home Number:"
              isInline={false}
              labelWidth="40%"
            >
              <TextInput
                style={styles.textInput}
                defaultValue={initialFormValues.home}
                onChangeText={handleHomeChange}
                placeholder="Home Number"
                maxLength={10}
                placeholderTextColor={styles.textInputPlaceholder.color}
              />
            </LabelContainer>
            <LabelContainer label="Email:" isInline={false} labelWidth="40%">
              <TextInput
                style={styles.textInput}
                defaultValue={initialFormValues.email}
                onChangeText={handleEmailChange}
                placeholder="Email"
                placeholderTextColor={styles.textInputPlaceholder.color}
              />
            </LabelContainer>
          </SectionContainer>
          <SectionContainer title="Other">
            <LabelContainer label="Notes:" isInline={false} labelWidth="40%">
              <TextInput
                style={[styles.textInput, styles.textArea]}
                defaultValue={initialFormValues.notes}
                onChangeText={handleNotesChange}
                placeholder="Notes"
                multiline={true}
                textAlignVertical="top"
                maxLength={200}
                placeholderTextColor={styles.textInputPlaceholder.color}
              />
            </LabelContainer>
          </SectionContainer>
        </ScrollView>
      </View>
      <View style={styles.row}>
        <Button onPress={handleCancel} title="Cancel" flex={1} />
        <Button onPress={handleSubmitForm} title="Save" flex={1} />
      </View>
    </View>
  );
};

export default memo(CustomerForm);
