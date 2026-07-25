import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

// export const unstable_settings = {
//   anchor: "(tabs)",
// };

export default function RegionLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false, title: "Region List" }}
        />
        <Stack.Screen
          name="customerList"
          options={{ headerShown: true, title: "Region Customers" }}
        />
        <Stack.Screen
          name="editCustomer"
          options={{ headerShown: true, title: "Edit Customer" }}
        />
        <Stack.Screen
          name="newCustomer"
          options={{ headerShown: true, title: "New Customer" }}
        />
      </Stack>

      <StatusBar style="auto" />
    </>
  );
}
