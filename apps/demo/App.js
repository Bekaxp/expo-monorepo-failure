import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Button, Card } from "@monorepo/core";

export default function App() {
  const handlePress = () => {
    Alert.alert("Success", "Button from @monorepo/core was pressed!");
  };

  return (
    <View style={styles.container}>
      <Card title="Welcome to Expo Monorepo">
        <Text style={styles.description}>
          This is a demo app using shared components from the core workspace.
        </Text>
        <View style={styles.buttonContainer}>
          <Button title="Press Me!" onPress={handlePress} />
        </View>
      </Card>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    lineHeight: 24,
  },
  buttonContainer: {
    marginTop: 10,
  },
});
