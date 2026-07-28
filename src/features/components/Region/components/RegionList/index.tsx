import { useNavigation } from "@react-navigation/native";
import { FlatList, Text, View } from "react-native";
import stylesFn from "./styles";

import Button from "@/src/components/Button";
import { regions } from "@/src/constants/regions";

const RegionList = () => {
  const navigation = useNavigation<any>();
  const styles = stylesFn();

  return (
    <View style={styles.container}>
      <Text style={styles.instructions}>Select a region:</Text>
      <FlatList
        data={regions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Button
            title={item.label}
            onPress={() =>
              navigation.navigate("RegionCustomers", {
                regionId: item.id.toString(),
              })
            }
          />
        )}
      />
      <Button
        title="Create Customer"
        onPress={() => navigation.navigate("NewCustomer")}
      />
    </View>
  );
};

export default RegionList;
