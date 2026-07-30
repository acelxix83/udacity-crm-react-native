import { useLoadState, useSavingState } from "@/src/features/shared/hooks";
import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Notifications from "expo-notifications";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { ActivityIndicator, Text, View, useColorScheme } from "react-native";

import CustomerDetailsScreen from "@/src/screens/CustomerDetails";
import CustomerListScreen from "@/src/screens/CustomerList";
import EditCustomerScreen from "@/src/screens/EditCustomer";
import NewCustomerScreen from "@/src/screens/NewCustomer";
import RegionListScreen from "@/src/screens/RegionList";
import HomeScreen from "@/src/screens/Welcome";
import { getNavigationTheme } from "@/src/theme";
import stylesFn from "./styles";

const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef<any>();

const Navigator = () => {
  const colorScheme = useColorScheme();
  const { isLoading } = useLoadState();
  const { isSaving } = useSavingState();
  const styles = stylesFn();
  const navigationTheme = useMemo(
    () => getNavigationTheme(colorScheme),
    [colorScheme],
  );
  const lastNotificationResponse = Notifications.useLastNotificationResponse();
  const pendingCustomerIdRef = useRef<string | null>(null);
  const handledNotificationIdRef = useRef<string | null>(null);

  const navigateToCustomerDetails = useCallback((customerId: string) => {
    if (navigationRef.isReady()) {
      navigationRef.navigate("CustomerDetails", { customerId });
      return;
    }

    // Navigation is not ready yet (cold start); queue this route.
    pendingCustomerIdRef.current = customerId;
  }, []);

  const handleNavigationReady = useCallback(() => {
    if (!pendingCustomerIdRef.current) {
      return;
    }

    const customerId = pendingCustomerIdRef.current;
    pendingCustomerIdRef.current = null;
    navigationRef.navigate("CustomerDetails", { customerId });
  }, []);

  const handleNotificationResponse = useCallback(
    (response: Notifications.NotificationResponse | null | undefined) => {
      if (!response) {
        return;
      }

      const notificationId = response.notification.request.identifier;
      if (handledNotificationIdRef.current === notificationId) {
        return;
      }

      const data = response.notification.request.content.data as {
        customerId?: string | number;
      };
      const customerId = data?.customerId;
      if (customerId === undefined || customerId === null) {
        return;
      }

      handledNotificationIdRef.current = notificationId;
      navigateToCustomerDetails(String(customerId));
    },
    [navigateToCustomerDetails],
  );

  useEffect(() => {
    // Handle tap when app resumes from background.
    const listener = Notifications.addNotificationResponseReceivedListener(
      handleNotificationResponse,
    );

    return () => {
      listener.remove();
    };
  }, [handleNotificationResponse]);

  useEffect(() => {
    // Handle tap that launched the app from a terminated state.
    handleNotificationResponse(lastNotificationResponse);
  }, [lastNotificationResponse, handleNotificationResponse]);

  return (
    <>
      {(isLoading || isSaving) && (
        <View style={styles.overlay}>
          <View style={styles.overlayMessageContainer}>
            <ActivityIndicator size="large" color={styles.spinner.color} />
            <Text style={styles.h1}>
              {isLoading ? "Loading..." : isSaving ? "Saving Customer..." : ""}
            </Text>
          </View>
        </View>
      )}
      <NavigationContainer
        ref={navigationRef}
        theme={navigationTheme}
        onReady={handleNavigationReady}
      >
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            contentStyle: styles.navigatorBackground,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Regions"
            component={RegionListScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="RegionCustomers"
            component={CustomerListScreen}
            options={{ title: "Region Customers", headerShown: true }}
          />
          <Stack.Screen
            name="EditCustomer"
            component={EditCustomerScreen}
            options={{ title: "Edit Customer", headerShown: true }}
          />
          <Stack.Screen
            name="NewCustomer"
            component={NewCustomerScreen}
            options={{ title: "New Customer", headerShown: true }}
          />
          <Stack.Screen
            name="CustomerDetails"
            component={CustomerDetailsScreen}
            options={{ title: "Customer Details", headerShown: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigator;
