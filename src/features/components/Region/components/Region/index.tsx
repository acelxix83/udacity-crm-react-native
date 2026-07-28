import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

import Button from "@/src/components/Button";
import CustomerView from "@/src/features/components/Customer/components/View";
import { getRegionLabel } from "@/src/utilities/helper";
import stylesFn from "./styles";

const Region = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const regionId = route.params?.regionId as string;
  const regionCustomerIds: string[] =
    useSelector(
      (state: any) =>
        state.region.list.regions[regionId as string]?.customerIds,
    ) ?? [];
  const hasCustomers = regionCustomerIds.length > 0;
  const styles = stylesFn();

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>{getRegionLabel(regionId)}</Text>
      <Text style={styles.h2}>Customer Count: {regionCustomerIds.length}</Text>
      {!hasCustomers ? (
        <Text style={styles.instructions}>No customers yet.</Text>
      ) : (
        <Text style={styles.instructions}>
          Select a customer to view details:
        </Text>
      )}
      <FlatList
        data={regionCustomerIds}
        keyExtractor={(customerId) => customerId}
        renderItem={({ item: customerId }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("CustomerDetails", { customerId })
            }
          >
            <CustomerView
              customerId={customerId}
              regionId={regionId as string}
            />
          </TouchableOpacity>
        )}
      />
      <Button
        onPress={() => navigation.navigate("NewCustomer", { regionId })}
        title="Create Customer"
      />
    </View>
  );
};

export default Region;
