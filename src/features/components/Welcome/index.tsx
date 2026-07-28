import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";

import Button from "@/src/components/Button";
import { useClearState } from "@/src/features/shared/hooks";
import { clearStorage } from "@/src/utilities/asyncStorage";
import stylesFn from "./styles";

const Welcome = () => {
  const navigation = useNavigation<any>();
  const { clearState } = useClearState();

  const handleClearStorage = async () => {
    //TODO: Add confirmation dialog before clearing storage
    clearState();
    await clearStorage();
  };

  const styles = stylesFn();
  return (
    <View style={styles.container}>
      <Text style={[styles.h1, styles.centeredText]}>Udacity CRM</Text>
      <Button title="Regions" onPress={() => navigation.navigate("Regions")} />
      <Button title="Clear Storage..." onPress={handleClearStorage} />
    </View>
  );
};

export default Welcome;
