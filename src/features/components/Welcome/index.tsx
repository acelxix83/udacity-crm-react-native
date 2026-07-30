import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import { Alert, Platform, Text, View, useWindowDimensions } from "react-native";

import Button from "@/src/components/Button";
import { useClearState } from "@/src/features/shared/hooks";
import { clearStorage } from "@/src/utilities/asyncStorage";
import stylesFn from "./styles";

const Welcome = () => {
  const navigation = useNavigation<any>();
  const { clearState } = useClearState();

  const { width: screenWidth, height: screenHeight } = useWindowDimensions();

  const handleClearStorage = async (e: any) => {
    e?.preventDefault?.();

    if (Platform.OS === "web") {
      const confirmed = window.confirm(
        "Are you sure you want to clear the cache?",
      );
      if (!confirmed) {
        return;
      }

      clearState();
      await clearStorage();
      return;
    }

    Alert.alert(
      "Clear Cache?",
      "Are you sure you want to clear the cache?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Clear",
          style: "destructive",
          onPress: async () => {
            clearState();
            await clearStorage();
          },
        },
      ],
      { cancelable: true },
    );
  };

  const styles = stylesFn({ width: screenWidth, height: screenHeight });
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("@/assets/logo.svg")}
          style={styles.logo}
          contentFit="contain"
        />
      </View>
      <Text style={styles.h1}>Welcome to UdaCRM!</Text>
      <Text style={styles.text}>
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
