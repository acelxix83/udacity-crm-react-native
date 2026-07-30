import { useNavigation, useRoute } from "@react-navigation/native";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";

import { Alert, ScrollView, Text, TextInput, View } from "react-native";

import Toast from "react-native-toast-message";
import { useSelector } from "react-redux";

import Button from "@/src/components/Button";
import DropdownComponent from "@/src/components/Dropdown";
import LabelContainer from "@/src/components/LabelContainer";
import SectionContainer from "@/src/components/SectionContainer";
import { boolOptions } from "@/src/constants/boolOptions";
import { regions } from "@/src/constants/regions";
import { ERROR, IDLE, LOADING } from "@/src/constants/status";
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

const EMPTY_FORM_ERRORS = {
  firstName: "",
  lastName: "",
  isActive: "",
  regionId: "",
  home: "",
  mobile: "",
  email: "",
  notes: "",
};

const cloneFormValues = (values: {
  firstName: string;
  lastName: string;
  isActive: string;
  regionId: string | null;
  home: string;
  mobile: string;
  email: string;
  notes: string;
}) => ({
  ...values,
});

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
      home: (customer.home ?? "").replace(/\D/g, "").slice(0, 10),
      mobile: (customer.mobile ?? "").replace(/\D/g, "").slice(0, 10),
      email: customer.email ?? "",
      notes: customer.notes ?? "",
    }),
    [customer, currentRegionId],
  );
  const formValuesRef = useRef(cloneFormValues(initialFormValues));
  const initialValuesRef = useRef(cloneFormValues(initialFormValues));
  const isDirtyRef = useRef(false);
  const homeInputRef = useRef<TextInput | null>(null);
  const mobileInputRef = useRef<TextInput | null>(null);
  const [formErrors, setFormErrors] = useState(EMPTY_FORM_ERRORS);

  const [submitClicked, setSubmitClicked] = useState(false);
  const [requestLoading, setRequestLoading] = useState(false);

  useEffect(() => {
    formValuesRef.current = cloneFormValues(initialFormValues);
    initialValuesRef.current = cloneFormValues(initialFormValues);
    isDirtyRef.current = false;
  }, [initialFormValues]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("beforeRemove", (e: any) => {
      if (!isDirtyRef.current) {
        return;
      }

      e.preventDefault();
      Alert.alert(
        "Discard changes?",
        "You have unsaved changes. Are you sure you want to leave?",
        [
          { text: "Don't leave", style: "cancel" },
          {
            text: "Discard",
            style: "destructive",
            onPress: () => navigation.dispatch(e.data.action),
          },
        ],
        { cancelable: true },
      );
    });

    return unsubscribe;
  }, [navigation]);

  const updateDirtyState = useCallback(() => {
    const initialValues = initialValuesRef.current;
    const currentValues = formValuesRef.current;

    isDirtyRef.current =
      currentValues.firstName !== initialValues.firstName ||
      currentValues.lastName !== initialValues.lastName ||
      currentValues.isActive !== initialValues.isActive ||
      currentValues.regionId !== initialValues.regionId ||
      currentValues.home !== initialValues.home ||
      currentValues.mobile !== initialValues.mobile ||
      currentValues.email !== initialValues.email ||
      currentValues.notes !== initialValues.notes;
  }, []);

  const sanitizePhoneInput = useCallback((text: string) => {
    return text.replace(/\D/g, "").slice(0, 10);
  }, []);

  const formatPhoneInput = useCallback((digitsOnly: string) => {
    if (digitsOnly.length <= 3) {
      return digitsOnly;
    }

    if (digitsOnly.length <= 6) {
      return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3)}`;
    }

    return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6)}`;
  }, []);

  const clearError = useCallback((field: keyof typeof EMPTY_FORM_ERRORS) => {
    setFormErrors((prevErrors) => {
      if (!prevErrors[field]) {
        return prevErrors;
      }

      return {
        ...prevErrors,
        [field]: "",
      };
    });
  }, []);

  const handleFirstNameChange = useCallback(
    (text: string) => {
      formValuesRef.current.firstName = text;
      updateDirtyState();
      if (text.trim()) {
        clearError("firstName");
      }
    },
    [clearError, updateDirtyState],
  );

  const handleLastNameChange = useCallback(
    (text: string) => {
      formValuesRef.current.lastName = text;
      updateDirtyState();
      if (text.trim()) {
        clearError("lastName");
      }
    },
    [clearError, updateDirtyState],
  );

  const handleIsActiveChange = useCallback(
    (value: string) => {
      formValuesRef.current.isActive = value;
      updateDirtyState();
    },
    [updateDirtyState],
  );

  const handleRegionChange = useCallback(
    (text: string) => {
      const nextRegionId = text !== "" ? text : null;
      formValuesRef.current.regionId = nextRegionId;
      updateDirtyState();
      if (nextRegionId) {
        clearError("regionId");
      }
    },
    [clearError, updateDirtyState],
  );

  const handleHomeChange = useCallback(
    (text: string) => {
      const sanitizedText = sanitizePhoneInput(text);
      const formattedText = formatPhoneInput(sanitizedText);
      formValuesRef.current.home = sanitizedText;
      updateDirtyState();
      if (!sanitizedText || sanitizedText.length === 10) {
        clearError("home");
      }

      if (formattedText !== text) {
        homeInputRef.current?.setNativeProps({ text: formattedText });
      }
    },
    [sanitizePhoneInput, formatPhoneInput, clearError, updateDirtyState],
  );

  const handleMobileChange = useCallback(
    (text: string) => {
      const sanitizedText = sanitizePhoneInput(text);
      const formattedText = formatPhoneInput(sanitizedText);
      formValuesRef.current.mobile = sanitizedText;
      updateDirtyState();
      if (!sanitizedText || sanitizedText.length === 10) {
        clearError("mobile");
      }

      if (formattedText !== text) {
        mobileInputRef.current?.setNativeProps({ text: formattedText });
      }
    },
    [sanitizePhoneInput, formatPhoneInput, clearError, updateDirtyState],
  );

  const handleEmailChange = useCallback(
    (text: string) => {
      formValuesRef.current.email = text;
      updateDirtyState();
      if (!text || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
        clearError("email");
      }
    },
    [clearError, updateDirtyState],
  );

  const handleNotesChange = useCallback(
    (text: string) => {
      formValuesRef.current.notes = text;
      updateDirtyState();
    },
    [updateDirtyState],
  );

  const validateForm = useCallback(() => {
    const nextErrors = { ...EMPTY_FORM_ERRORS };

    if (!formValuesRef.current.firstName.trim()) {
      nextErrors.firstName = "Required.";
    }

    if (!formValuesRef.current.lastName.trim()) {
      nextErrors.lastName = "Required.";
    }

    if (
      formValuesRef.current.mobile &&
      formValuesRef.current.mobile.length < 10
    ) {
      nextErrors.mobile = "Must be 10 digits.";
    }

    if (formValuesRef.current.home && formValuesRef.current.home.length < 10) {
      nextErrors.home = "Must be 10 digits.";
    }

    if (
      formValuesRef.current.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValuesRef.current.email)
    ) {
      nextErrors.email = "Invalid format.";
    }

    if (!formValuesRef.current.regionId) {
      nextErrors.regionId = "Required.";
    }

    return nextErrors;
  }, []);

  const handleSubmitForm = () => {
    const nextErrors = validateForm();
    setFormErrors(nextErrors);
    const formValues = formValuesRef.current;

    if (Object.values(nextErrors).some((error) => error !== "")) {
      showToast(false, "Please fix errors and try again.");

      return;
    }

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
    navigation.goBack();
  };

  const showToast = useCallback(
    (success: boolean, message?: string) => {
      const toastMessage =
        message ??
        (success
          ? isEditMode
            ? "Customer updated successfully!"
            : "Customer created successfully!"
          : "Failed to save customer. Please try again.");
      Toast.show({
        type: success ? "success" : "error",
        text1: toastMessage,
      });
    },
    [isEditMode],
  );

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
      isDirtyRef.current = false;
      showToast(true);
      navigation.goBack();
    }
    if (status === ERROR) {
      setRequestLoading(false);
      setSubmitClicked(false);
      showToast(false);
    }
  }, [
    status,
    navigation,
    submitClicked,
    requestLoading,
    showToast,
    isEditMode,
  ]);

  return (
    <View style={styles.container}>
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
                style={[
                  styles.textInput,
                  formErrors.firstName ? styles.errorInput : null,
                ]}
                defaultValue={initialFormValues.firstName}
                onChangeText={handleFirstNameChange}
                placeholder="First Name"
                placeholderTextColor={styles.textInputPlaceholder.color}
              />
              {formErrors.firstName && (
                <Text style={styles.errorText}>{formErrors.firstName}</Text>
              )}
            </LabelContainer>
            <LabelContainer
              label="Last Name:"
              isInline={false}
              labelWidth="40%"
            >
              <TextInput
                style={[
                  styles.textInput,
                  formErrors.lastName ? styles.errorInput : null,
                ]}
                defaultValue={initialFormValues.lastName}
                onChangeText={handleLastNameChange}
                placeholder="Last Name"
                placeholderTextColor={styles.textInputPlaceholder.color}
              />
              {formErrors.lastName && (
                <Text style={styles.errorText}>{formErrors.lastName}</Text>
              )}
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
              {formErrors.regionId && (
                <Text style={styles.errorText}>{formErrors.regionId}</Text>
              )}
            </LabelContainer>
          </SectionContainer>
          <SectionContainer title="Contact Information">
            <LabelContainer
              label="Mobile Number:"
              isInline={false}
              labelWidth="40%"
            >
              <TextInput
                ref={mobileInputRef}
                style={[
                  styles.textInput,
                  formErrors.mobile ? styles.errorInput : null,
                ]}
                defaultValue={formatPhoneInput(initialFormValues.mobile)}
                onChangeText={handleMobileChange}
                placeholder="Mobile Number"
                maxLength={14}
                keyboardType="number-pad"
                placeholderTextColor={styles.textInputPlaceholder.color}
              />
              {formErrors.mobile && (
                <Text style={styles.errorText}>{formErrors.mobile}</Text>
              )}
            </LabelContainer>
            <LabelContainer
              label="Home Number:"
              isInline={false}
              labelWidth="40%"
            >
              <TextInput
                ref={homeInputRef}
                style={[
                  styles.textInput,
                  formErrors.home ? styles.errorInput : null,
                ]}
                defaultValue={formatPhoneInput(initialFormValues.home)}
                onChangeText={handleHomeChange}
                placeholder="Home Number"
                maxLength={14}
                keyboardType="number-pad"
                placeholderTextColor={styles.textInputPlaceholder.color}
              />
              {formErrors.home && (
                <Text style={styles.errorText}>{formErrors.home}</Text>
              )}
            </LabelContainer>
            <LabelContainer label="Email:" isInline={false} labelWidth="40%">
              <TextInput
                style={[
                  styles.textInput,
                  formErrors.email ? styles.errorInput : null,
                ]}
                defaultValue={initialFormValues.email}
                onChangeText={handleEmailChange}
                placeholder="Email"
                placeholderTextColor={styles.textInputPlaceholder.color}
              />
              {formErrors.email && (
                <Text style={styles.errorText}>{formErrors.email}</Text>
              )}
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
