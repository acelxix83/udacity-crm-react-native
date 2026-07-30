import { useNavigation, useRoute } from "@react-navigation/native";
import type { NotificationTriggerInput } from "expo-notifications";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";

import Button from "@/src/components/Button";
import LabelContainer from "@/src/components/LabelContainer";
import SectionContainer from "@/src/components/SectionContainer";
import { DEFAULT_TEXT } from "@/src/constants/defaultValues";
import { formatPhoneNumber } from "@/src/utilities/helper";
import CustomerView from "../View";
import stylesFn from "./styles";

const CustomerDetails = () => {
  const trigger: NotificationTriggerInput = {
    type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
    seconds: 10,
    repeats: false,
  };
  const handleRemindMe = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Contact Customer",
        body: `Customer: ${customer?.firstName || DEFAULT_TEXT} ${customer?.lastName || DEFAULT_TEXT}`,
        data: {
          customerId,
        },
      },
      trigger: trigger,
    });
  };
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const customerId = route.params?.customerId as string;

  const customer = useSelector(
    (state: any) => state.customer.list.customers[customerId as string],
  );

  const styles = stylesFn();

  const askNotifications = async () => {
    const { status }: Notifications.PermissionResponse =
      await Notifications.getPermissionsAsync();
    if (status !== "granted") {
      await Notifications.requestPermissionsAsync();
    }
  };

  useEffect(() => {
    askNotifications();
  }, []);

  return (
    <View style={styles.customerDetailsContainer}>
      <ScrollView>
        <CustomerView
          customerId={customerId}
          regionId={customer?.regionId || null}
          title="Customer Information"
        />
        <SectionContainer title="Contact Information">
          <LabelContainer label="Mobile:">
            <Text style={styles.text}>
              {formatPhoneNumber(customer?.mobile || DEFAULT_TEXT)}
            </Text>
          </LabelContainer>
          <LabelContainer label="Home:">
            <Text style={styles.text}>
              {formatPhoneNumber(customer?.home || DEFAULT_TEXT)}
            </Text>
          </LabelContainer>
          <LabelContainer label="Email:">
            <Text style={styles.text}>{customer?.email || DEFAULT_TEXT}</Text>
          </LabelContainer>
        </SectionContainer>
        <SectionContainer title="Other">
          <LabelContainer label="Notes:">
            <Text style={styles.text}>{customer?.notes || DEFAULT_TEXT}</Text>
          </LabelContainer>
        </SectionContainer>
        <Button onPress={handleRemindMe} title="Set Reminder" />
        <Text style={styles.instructions}>
          Reminder will be set for 10 seconds from now.
        </Text>
      </ScrollView>
      <Button
        onPress={() => navigation.navigate("EditCustomer", { customerId })}
        title="Edit Customer"
      />
    </View>
  );
};

export default CustomerDetails;
