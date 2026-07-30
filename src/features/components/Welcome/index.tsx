import { useNavigation } from "@react-navigation/native";
import { Image, Text, View } from "react-native";

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
      <View style={styles.logoContainer}>
        <Image source={require("@/assets/logo.svg")} style={styles.logo} />
        <Text style={[styles.logoText, styles.centeredText]}>UdaCRM</Text>
      </View>
      <Text style={[styles.h1, styles.centeredText]}>Welcome to UdaCRM!</Text>
      <Text style={[styles.text, styles.centeredText]}>
        Select Regions to view the list of regions and add customers to each
        region. You can also clear the cache to reset the app state.
      </Text>
      <View style={styles.row}>
        <Button title="Clear Cache" onPress={handleClearStorage} flex={1} />
        <Button
          title="Regions"
          onPress={() => navigation.navigate("Regions")}
          flex={1}
        />
      </View>
    </View>
  );
};

export default Welcome;
