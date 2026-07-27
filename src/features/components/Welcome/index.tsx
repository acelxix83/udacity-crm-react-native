import { clearStorage } from "@/src/utilities/asyncStorage";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useClearState } from "../../hooks";

const Welcome = () => {
  const router = useRouter();
  const { clearState } = useClearState();

  const handleClearStorage = async () => {
    //TODO: Add confirmation dialog before clearing storage
    clearState();
    await clearStorage();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/regions")}
      >
        <Text style={styles.text}>Click to continue...</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleClearStorage}>
        <Text style={styles.text}>Clear Storage...</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    color: "#eee",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
});
