import { useLoadState } from "@/src/features/shared/hooks";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, Text, View } from "react-native";

import CustomerDetailsScreen from "@/src/screens/CustomerDetails";
import CustomerListScreen from "@/src/screens/CustomerList";
import EditCustomerScreen from "@/src/screens/EditCustomer";
import NewCustomerScreen from "@/src/screens/NewCustomer";
import RegionListScreen from "@/src/screens/RegionList";
import HomeScreen from "@/src/screens/Welcome";
import stylesFn, { Theme } from "./styles";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const { isLoading } = useLoadState();
  const styles = stylesFn();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={styles.spinner.color} />
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
          contentStyle: styles.navigatorBackground,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Regions" component={RegionListScreen} />
        <Stack.Screen
          name="RegionCustomers"
          component={CustomerListScreen}
          options={{ title: "Region Customers" }}
        />
        <Stack.Screen
          name="EditCustomer"
          component={EditCustomerScreen}
          options={{ title: "Edit Customer" }}
        />
        <Stack.Screen
          name="NewCustomer"
          component={NewCustomerScreen}
          options={{ title: "New Customer" }}
        />
        <Stack.Screen
          name="CustomerDetails"
          component={CustomerDetailsScreen}
          options={{ title: "Customer Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
